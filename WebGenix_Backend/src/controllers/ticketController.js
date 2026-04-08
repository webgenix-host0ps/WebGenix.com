// src/controllers/ticketController.js
import { db } from '../db/index.js';
import { tickets, ticketMessages, ticketStatusHistory, ticketAssignments } from '../db/schema.js';
import { eq, and, desc, sql } from 'drizzle-orm';
import { generateTicketId } from '../utils/generateTicketId.js';

// Helper to check if user is support or admin
function isSupportOrAdmin(user) {
  if (!user) return false;
  
  const realmRoles = user.realm_access?.roles || [];
  
  const clientRoles = [];
  if (user.resource_access) {
    Object.values(user.resource_access).forEach(client => {
      if (client.roles) clientRoles.push(...client.roles);
    });
  }
  
  const allRoles = [...realmRoles, ...clientRoles];
  
  // Recognized support/admin role names
  const supportRoles = [
    'WebGenix_Support_Role',
    'WebGenix_Admin_Role'
  ];
  
  return supportRoles.some(role => allRoles.includes(role));
}

// Helper to check if user has admin role (both realm and client roles)
function isAdmin(user) {
  if (!user) return false;
  
  const realmRoles = user.realm_access?.roles || [];
  
  const clientRoles = [];
  if (user.resource_access) {
    Object.values(user.resource_access).forEach(client => {
      if (client.roles) clientRoles.push(...client.roles);
    });
  }
  
  const allRoles = [...realmRoles, ...clientRoles];
  
  // Recognized admin role names
  const adminRoles = ['WebGenix_Admin_Role'];
  
  return adminRoles.some(role => allRoles.includes(role));
}

// =============================================
// 1. CREATE TICKET
// =============================================
export const createTicket = async (req, res) => {
  try {
    const user = req.user;
    const { subject, description, department = 'technical', priority = 'normal' } = req.body;

    if (!subject || !description) {
      return res.status(400).json({ error: 'Subject and description are required' });
    }

    let ticketId = generateTicketId();
    let existing = await db.select().from(tickets).where(eq(tickets.ticketId, ticketId));
    while (existing.length > 0) {
      ticketId = generateTicketId();
      existing = await db.select().from(tickets).where(eq(tickets.ticketId, ticketId));
    }

    const [newTicket] = await db.insert(tickets).values({
      ticketId,
      userId: user.sub,
      email: user.email,
      subject,
      description,
      department,
      priority,
      source: 'web',
      status: 'open',
    }).returning();

    await db.insert(ticketMessages).values({
      ticketId: newTicket.id,
      sender: user.name || user.preferred_username || user.email,
      senderRole: 'client',
      body: description,
      isInternal: false,
    });

    await db.insert(ticketStatusHistory).values({
      ticketId: newTicket.id,
      newStatus: 'open',
      changedBy: user.sub,
      comment: 'Ticket created',
    });

    res.status(201).json(newTicket);
  } catch (err) {
    console.error('Create ticket error:', err);
    res.status(500).json({ error: 'Failed to create ticket' });
  }
};

// =============================================
// 2. LIST TICKETS (with filters, pagination)
// =============================================
export const listTickets = async (req, res) => {
  try {
    const user = req.user;
    const { status, priority, department, page = 1, limit = 20 } = req.query;
    const offset = (page - 1) * limit;

    let query = db.select().from(tickets);

    if (!isSupportOrAdmin(user)) {
      query = query.where(eq(tickets.userId, user.sub));
    } else {
      if (status) query = query.where(eq(tickets.status, status));
      if (priority) query = query.where(eq(tickets.priority, priority));
      if (department) query = query.where(eq(tickets.department, department));
    }

    const ticketList = await query
      .orderBy(desc(tickets.createdAt))
      .limit(limit)
      .offset(offset);

    let countQuery = db.select({ count: sql`count(*)` }).from(tickets);
    if (!isSupportOrAdmin(user)) {
      countQuery = countQuery.where(eq(tickets.userId, user.sub));
    }
    const [{ count }] = await countQuery;

    res.json({
      data: ticketList,
      pagination: {
        page: parseInt(page),
        limit: parseInt(limit),
        total: parseInt(count),
        pages: Math.ceil(count / limit),
      },
    });
  } catch (err) {
    console.error('List tickets error:', err);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
};

// =============================================
// 3. GET SINGLE TICKET (with messages)
// =============================================
export const getTicketById = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;

    let ticketQuery = db.select().from(tickets).where(eq(tickets.id, parseInt(id)));
    if (!isSupportOrAdmin(user)) {
      ticketQuery = ticketQuery.where(eq(tickets.userId, user.sub));
    }
    const [ticket] = await ticketQuery;

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found or access denied' });
    }

    let messagesQuery = db.select().from(ticketMessages)
      .where(eq(ticketMessages.ticketId, ticket.id))
      .orderBy(ticketMessages.createdAt);
    
    if (!isSupportOrAdmin(user)) {
      messagesQuery = messagesQuery.where(eq(ticketMessages.isInternal, false));
    }
    
    const messages = await messagesQuery;

    res.json({ ...ticket, messages });
  } catch (err) {
    console.error('Get ticket error:', err);
    res.status(500).json({ error: 'Failed to fetch ticket' });
  }
};

// =============================================
// 4. ADD REPLY TO TICKET
// =============================================
export const addReply = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { body, isInternal = false } = req.body;

    if (!body || body.trim() === '') {
      return res.status(400).json({ error: 'Message body cannot be empty' });
    }

    let ticketQuery = db.select().from(tickets).where(eq(tickets.id, parseInt(id)));
    if (!isSupportOrAdmin(user)) {
      ticketQuery = ticketQuery.where(eq(tickets.userId, user.sub));
    }
    const [ticket] = await ticketQuery;

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found or access denied' });
    }

    if (!isSupportOrAdmin(user) && isInternal) {
      return res.status(403).json({ error: 'Clients cannot post internal notes' });
    }

    const senderRole = isSupportOrAdmin(user) ? (isAdmin(user) ? 'admin' : 'support') : 'client';
    const senderName = user.name || user.preferred_username || user.email;

    const [newMessage] = await db.insert(ticketMessages).values({
      ticketId: ticket.id,
      sender: senderName,
      senderRole,
      body,
      isInternal: isInternal || false,
    }).returning();

    if (!isSupportOrAdmin(user) && (ticket.status === 'resolved' || ticket.status === 'closed')) {
      await db.update(tickets)
        .set({ status: 'open', updatedAt: new Date() })
        .where(eq(tickets.id, ticket.id));
      
      await db.insert(ticketStatusHistory).values({
        ticketId: ticket.id,
        oldStatus: ticket.status,
        newStatus: 'open',
        changedBy: user.sub,
        comment: 'Reopened by client reply',
      });
    } else {
      await db.update(tickets)
        .set({ updatedAt: new Date() })
        .where(eq(tickets.id, ticket.id));
    }

    if (isSupportOrAdmin(user) && !ticket.firstResponseAt) {
      await db.update(tickets)
        .set({ firstResponseAt: new Date() })
        .where(eq(tickets.id, ticket.id));
    }

    res.status(201).json(newMessage);
  } catch (err) {
    console.error('Add reply error:', err);
    res.status(500).json({ error: 'Failed to add reply' });
  }
};

// =============================================
// 5. UPDATE TICKET (status, priority, assignee, department)
// =============================================
export const updateTicket = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { status, priority, department, assignedTo } = req.body;

    if (!isSupportOrAdmin(user)) {
      return res.status(403).json({ error: 'Permission denied' });
    }

    const [existing] = await db.select().from(tickets).where(eq(tickets.id, parseInt(id)));
    if (!existing) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    const updateData = {};
    if (status) updateData.status = status;
    if (priority) updateData.priority = priority;
    if (department) updateData.department = department;
    if (assignedTo !== undefined) updateData.assignedTo = assignedTo;
    updateData.updatedAt = new Date();

    if (status === 'resolved' && existing.status !== 'resolved') {
      updateData.resolvedAt = new Date();
    }
    if (status === 'closed' && existing.status !== 'closed') {
      updateData.closedAt = new Date();
    }

    const [updated] = await db.update(tickets)
      .set(updateData)
      .where(eq(tickets.id, existing.id))
      .returning();

    if (status && status !== existing.status) {
      await db.insert(ticketStatusHistory).values({
        ticketId: existing.id,
        oldStatus: existing.status,
        newStatus: status,
        changedBy: user.sub,
        comment: req.body.changeComment || 'Updated by support',
      });
    }

    if (assignedTo !== undefined && assignedTo !== existing.assignedTo) {
      await db.update(ticketAssignments)
        .set({ isCurrent: false })
        .where(eq(ticketAssignments.ticketId, existing.id));
      
      await db.insert(ticketAssignments).values({
        ticketId: existing.id,
        assignedTo,
        assignedBy: user.sub,
        isCurrent: true,
      });
    }

    res.json(updated);
  } catch (err) {
    console.error('Update ticket error:', err);
    res.status(500).json({ error: 'Failed to update ticket' });
  }
};

// =============================================
// 6. RATE TICKET (CSAT)
// =============================================
export const rateTicket = async (req, res) => {
  try {
    const user = req.user;
    const { id } = req.params;
    const { rating, comment } = req.body;

    if (!rating || rating < 1 || rating > 5) {
      return res.status(400).json({ error: 'Rating must be between 1 and 5' });
    }

    const [ticket] = await db.select().from(tickets)
      .where(and(eq(tickets.id, parseInt(id)), eq(tickets.userId, user.sub)));

    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    if (ticket.status !== 'resolved') {
      return res.status(400).json({ error: 'You can only rate resolved tickets' });
    }

    if (ticket.csatRating) {
      return res.status(400).json({ error: 'Ticket already rated' });
    }

    await db.update(tickets)
      .set({ csatRating: rating, csatComment: comment || null })
      .where(eq(tickets.id, ticket.id));

    res.json({ success: true, message: 'Thank you for your feedback!' });
  } catch (err) {
    console.error('Rate ticket error:', err);
    res.status(500).json({ error: 'Failed to submit rating' });
  }
};

// =============================================
// 7. GET TICKETS ASSIGNED TO CURRENT SUPPORT AGENT
// =============================================
export const getMyAssignedTickets = async (req, res) => {
  try {
    const user = req.user;
    
    // Debug logging - check backend console
    console.log('=== DEBUG: getMyAssignedTickets ===');
    console.log('User sub:', user?.sub);
    console.log('Realm roles:', user?.realm_access?.roles);
    console.log('Resource access:', JSON.stringify(user?.resource_access, null, 2));
    
    const hasSupport = isSupportOrAdmin(user);
    console.log('Has support/admin role?', hasSupport);
    
    if (!hasSupport) {
      return res.status(403).json({ error: 'Access denied. Support role required.' });
    }
    
    const assignedTickets = await db.select().from(tickets)
      .where(eq(tickets.assignedTo, user.sub))
      .orderBy(desc(tickets.createdAt));
    
    res.json(assignedTickets);
  } catch (err) {
    console.error('Get assigned tickets error:', err);
    res.status(500).json({ error: 'Failed to fetch assigned tickets' });
  }
};

// =============================================
// ADMIN: GET ALL TICKETS WITH USER DETAILS
// =============================================
export const adminGetAllTickets = async (req, res) => {
  try {
    const user = req.user;
    
    if (!isAdmin(user)) {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    const { 
      status, priority, department, userId, 
      fromDate, toDate, search,
      page = 1, limit = 50 
    } = req.query;
    const offset = (page - 1) * limit;
    
    let query = db.select().from(tickets);
    
    // Apply filters
    if (status) query = query.where(eq(tickets.status, status));
    if (priority) query = query.where(eq(tickets.priority, priority));
    if (department) query = query.where(eq(tickets.department, department));
    if (userId) query = query.where(eq(tickets.userId, userId));
    if (fromDate) query = query.where(sql`${tickets.createdAt} >= ${fromDate}`);
    if (toDate) query = query.where(sql`${tickets.createdAt} <= ${toDate}`);
    if (search) {
      query = query.where(
        sql`${tickets.subject} ILIKE ${`%${search}%`} OR ${tickets.ticketId} ILIKE ${`%${search}%`}`
      );
    }
    
    const ticketList = await query
      .orderBy(desc(tickets.createdAt))
      .limit(limit)
      .offset(offset);
    
    const [{ count }] = await db.select({ count: sql`count(*)` }).from(tickets);
    
    // ✅ FIXED: Return 'tickets' property instead of 'data'
    res.json({
      tickets: ticketList,    // ← Changed from 'data' to 'tickets'
      pagination: { 
        page: parseInt(page), 
        limit: parseInt(limit), 
        total: parseInt(count), 
        pages: Math.ceil(count / limit) 
      }
    });
  } catch (err) {
    console.error('Admin get all tickets error:', err);
    res.status(500).json({ error: 'Failed to fetch tickets' });
  }
};

// =============================================
// ADMIN: DELETE TICKET (HARD DELETE)
// =============================================
export const adminDeleteTicket = async (req, res) => {
  try {
    const user = req.user;
    
    // ✅ FIXED: Use isAdmin() helper that checks both realm and client roles
    if (!isAdmin(user)) {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    const { id } = req.params;
    
    // Check if ticket exists
    const [ticket] = await db.select().from(tickets).where(eq(tickets.id, parseInt(id)));
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }
    
    // Delete will cascade to messages, attachments, etc.
    await db.delete(tickets).where(eq(tickets.id, parseInt(id)));
    
    // Log admin action (optional: store in audit log table)
    console.log(`Admin ${user.sub} deleted ticket ${ticket.ticketId}`);
    
    res.json({ success: true, message: 'Ticket deleted permanently' });
  } catch (err) {
    console.error('Admin delete ticket error:', err);
    res.status(500).json({ error: 'Failed to delete ticket' });
  }
};

// =============================================
// ADMIN: BULK UPDATE TICKETS
// =============================================
export const adminBulkUpdate = async (req, res) => {
  try {
    const user = req.user;
    
    // ✅ FIXED: Use isAdmin() helper that checks both realm and client roles
    if (!isAdmin(user)) {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    const { ticketIds, updates } = req.body; // updates: { status, priority, assignedTo, department }
    
    if (!ticketIds || !ticketIds.length) {
      return res.status(400).json({ error: 'No ticket IDs provided' });
    }
    
    const updateData = {};
    if (updates.status) updateData.status = updates.status;
    if (updates.priority) updateData.priority = updates.priority;
    if (updates.assignedTo !== undefined) updateData.assignedTo = updates.assignedTo;
    if (updates.department) updateData.department = updates.department;
    updateData.updatedAt = new Date();
    
    await db.update(tickets)
      .set(updateData)
      .where(sql`id IN (${ticketIds.join(',')})`);
    
    res.json({ success: true, updatedCount: ticketIds.length });
  } catch (err) {
    console.error('Admin bulk update error:', err);
    res.status(500).json({ error: 'Failed to update tickets' });
  }
};

// =============================================
// ADMIN: GET TICKET STATISTICS (Dashboard)
// =============================================
export const adminGetStats = async (req, res) => {
  try {
    const user = req.user;
    
    if (!isAdmin(user)) {
      return res.status(403).json({ error: 'Admin access required' });
    }
    
    const result = await db.select({
      total: sql`count(*)`,
      open: sql`sum(case when status = 'open' then 1 else 0 end)`,
      inProgress: sql`sum(case when status = 'in_progress' then 1 else 0 end)`,
      resolved: sql`sum(case when status = 'resolved' then 1 else 0 end)`,
      closed: sql`sum(case when status = 'closed' then 1 else 0 end)`,
      avgResponseTime: sql`avg(EXTRACT(EPOCH FROM (first_response_at - created_at)))`,
      avgResolutionTime: sql`avg(EXTRACT(EPOCH FROM (resolved_at - created_at)))`,
      avgCsat: sql`avg(csat_rating)`,
    }).from(tickets);
    
    const byDepartment = await db.select({
      department: tickets.department,
      count: sql`count(*)`,
    }).from(tickets).groupBy(tickets.department);
    
    const byPriority = await db.select({
      priority: tickets.priority,
      count: sql`count(*)`,
    }).from(tickets).groupBy(tickets.priority);
    
    const last7Days = await db.select({
      date: sql`DATE(created_at)`,
      count: sql`count(*)`,
    }).from(tickets)
      .where(sql`created_at >= NOW() - INTERVAL '7 days'`)
      .groupBy(sql`DATE(created_at)`)
      .orderBy(sql`DATE(created_at)`);
    
    // ✅ Return stats object directly (not nested)
    res.json({
      stats: result[0],
      byDepartment,
      byPriority,
      last7Days,
    });
  } catch (err) {
    console.error('Admin stats error:', err);
    res.status(500).json({ error: 'Failed to fetch stats' });
  }
};


// =============================================
// ADMIN: GET SINGLE TICKET WITH ALL MESSAGES (including internal notes)
// =============================================
export const adminGetTicketById = async (req, res) => {
  try {
    const user = req.user;
    if (!isAdmin(user)) {
      return res.status(403).json({ error: 'Admin access required' });
    }

    const { id } = req.params;
    const [ticket] = await db.select().from(tickets).where(eq(tickets.id, parseInt(id)));
    
    if (!ticket) {
      return res.status(404).json({ error: 'Ticket not found' });
    }

    // Get ALL messages (including internal notes) – no filter
    const messages = await db.select()
      .from(ticketMessages)
      .where(eq(ticketMessages.ticketId, ticket.id))
      .orderBy(ticketMessages.createdAt);

    // Optionally get assignment history
    const assignments = await db.select()
      .from(ticketAssignments)
      .where(eq(ticketAssignments.ticketId, ticket.id))
      .orderBy(ticketAssignments.assignedAt);

    res.json({
      ...ticket,
      messages,
      assignments,
    });
  } catch (err) {
    console.error('Admin get ticket error:', err);
    res.status(500).json({ error: 'Failed to fetch ticket' });
  }
};