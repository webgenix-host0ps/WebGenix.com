// src/db/schema.js
import {
  pgTable,
  serial,
  text,
  timestamp,
  varchar,
  pgEnum,
  integer,
  boolean,
  jsonb,
  uniqueIndex,
  index,
} from 'drizzle-orm/pg-core';
import { relations } from 'drizzle-orm';

// =====================================================
// 1. ENUMS (predefined value sets)
// =====================================================

// Ticket status – tracks lifecycle
export const ticketStatusEnum = pgEnum('ticket_status', [
  'open',                 // newly created, not yet handled
  'in_progress',          // support agent is working on it
  'resolved',             // solution provided, waiting for customer confirmation
  'closed',               // ticket is done
  'pending_customer',     // waiting for customer reply
  'pending_third_party',  // waiting for external team/vendor
]);

// Priority – impacts SLA and agent attention
export const ticketPriorityEnum = pgEnum('ticket_priority', [
  'low',
  'normal',
  'high',
  'urgent',
]);

// Department – routing to appropriate team
export const ticketDepartmentEnum = pgEnum('ticket_department', [
  'technical',
  'billing',
  'sales',
  'general',
  'partnerships',
]);

// Source – where the ticket originated
export const ticketSourceEnum = pgEnum('ticket_source', [
  'web',       // created via dashboard form
  'email',     // via inbound email
  'api',       // via REST API
  'slack',     // future integration
  'whatsapp',  // future integration
]);

// Sender role – to differentiate between customer and staff messages
export const senderRoleEnum = pgEnum('sender_role', [
  'client',
  'support',
  'admin',
]);

// =====================================================
// 2. TABLES
// =====================================================

// ---------- tickets (core table) ----------
export const tickets = pgTable(
  'tickets',
  {
    id: serial('id').primaryKey(),
    // Human-readable unique ID, e.g., T-10042
    ticketId: varchar('ticket_id', { length: 20 }).unique().notNull(),
    // Keycloak user ID (subject) – ties to your existing auth
    userId: varchar('user_id', { length: 255 }).notNull(),
    // Customer email (denormalized for quick notifications & search)
    email: varchar('email', { length: 255 }).notNull(),
    subject: text('subject').notNull(),
    description: text('description').notNull(),
    department: ticketDepartmentEnum('department').default('technical'),
    priority: ticketPriorityEnum('priority').default('normal'),
    status: ticketStatusEnum('status').default('open'),
    source: ticketSourceEnum('source').default('web'),
    // Keycloak ID of assigned support agent (nullable)
    assignedTo: varchar('assigned_to', { length: 255 }),
    // Array of tags for categorization, e.g., ['bug', 'urgent']
    tags: text('tags').array(),
    // Timestamps for SLA tracking
    firstResponseAt: timestamp('first_response_at'), // when first agent replied
    resolvedAt: timestamp('resolved_at'),
    closedAt: timestamp('closed_at'),
    // CSAT (Customer Satisfaction Score)
    csatRating: integer('csat_rating'), // 1-5
    csatComment: text('csat_comment'),
    // Flexible metadata for future needs (e.g., browser info, custom fields)
    metadata: jsonb('metadata'),
    createdAt: timestamp('created_at').defaultNow().notNull(),
    updatedAt: timestamp('updated_at').defaultNow().notNull(),
  },
  (table) => ({
    // Indexes – speed up common queries
    userIdIdx: index('idx_tickets_user_id').on(table.userId),
    statusIdx: index('idx_tickets_status').on(table.status),
    assignedToIdx: index('idx_tickets_assigned_to').on(table.assignedTo),
    departmentIdx: index('idx_tickets_department').on(table.department),
    priorityIdx: index('idx_tickets_priority').on(table.priority),
    createdAtIdx: index('idx_tickets_created_at').on(table.createdAt),
    ticketIdIdx: uniqueIndex('idx_tickets_ticket_id').on(table.ticketId),
  })
);

// ---------- ticket_messages (conversation + internal notes) ----------
export const ticketMessages = pgTable(
  'ticket_messages',
  {
    id: serial('id').primaryKey(),
    ticketId: serial('ticket_id')
      .notNull()
      .references(() => tickets.id, { onDelete: 'cascade' }),
    sender: varchar('sender', { length: 255 }).notNull(), // name or email
    senderRole: senderRoleEnum('sender_role').notNull(),
    body: text('body').notNull(),
    isInternal: boolean('is_internal').default(false), // if true, client cannot see
    attachments: jsonb('attachments').default([]), // store list of attachment objects
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    ticketIdIdx: index('idx_messages_ticket_id').on(table.ticketId),
    createdAtIdx: index('idx_messages_created_at').on(table.createdAt),
  })
);

// ---------- ticket_attachments (separate for detailed file info) ----------
export const ticketAttachments = pgTable(
  'ticket_attachments',
  {
    id: serial('id').primaryKey(),
    messageId: serial('message_id')
      .notNull()
      .references(() => ticketMessages.id, { onDelete: 'cascade' }),
    fileName: text('file_name').notNull(),
    fileSize: integer('file_size'),
    mimeType: varchar('mime_type', { length: 100 }),
    s3Key: text('s3_key').notNull(), // e.g., "tickets/123/screenshot.png"
    uploadedBy: varchar('uploaded_by', { length: 255 }).notNull(),
    createdAt: timestamp('created_at').defaultNow().notNull(),
  },
  (table) => ({
    messageIdIdx: index('idx_attachments_message_id').on(table.messageId),
  })
);

// ---------- ticket_assignments (history log) ----------
export const ticketAssignments = pgTable(
  'ticket_assignments',
  {
    id: serial('id').primaryKey(),
    ticketId: serial('ticket_id')
      .notNull()
      .references(() => tickets.id, { onDelete: 'cascade' }),
    assignedTo: varchar('assigned_to', { length: 255 }).notNull(),
    assignedBy: varchar('assigned_by', { length: 255 }).notNull(),
    assignedAt: timestamp('assigned_at').defaultNow().notNull(),
    isCurrent: boolean('is_current').default(true),
  },
  (table) => ({
    ticketIdIdx: index('idx_assignments_ticket_id').on(table.ticketId),
    assignedToIdx: index('idx_assignments_assigned_to').on(table.assignedTo),
    currentIdx: index('idx_assignments_current').on(table.isCurrent),
  })
);

// ---------- ticket_status_history (audit trail) ----------
export const ticketStatusHistory = pgTable(
  'ticket_status_history',
  {
    id: serial('id').primaryKey(),
    ticketId: serial('ticket_id')
      .notNull()
      .references(() => tickets.id, { onDelete: 'cascade' }),
    oldStatus: ticketStatusEnum('old_status'),
    newStatus: ticketStatusEnum('new_status').notNull(),
    changedBy: varchar('changed_by', { length: 255 }).notNull(),
    changedAt: timestamp('changed_at').defaultNow().notNull(),
    comment: text('comment'), // optional reason for change
  },
  (table) => ({
    ticketIdIdx: index('idx_status_history_ticket_id').on(table.ticketId),
    changedAtIdx: index('idx_status_history_changed_at').on(table.changedAt),
  })
);

// ---------- sla_policies (rules for response/resolution times) ----------
export const slaPolicies = pgTable(
  'sla_policies',
  {
    id: serial('id').primaryKey(),
    name: varchar('name', { length: 100 }).notNull(),
    priority: ticketPriorityEnum('priority').notNull(),
    department: ticketDepartmentEnum('department'),
    responseTimeMinutes: integer('response_time_minutes').notNull(),
    resolutionTimeMinutes: integer('resolution_time_minutes').notNull(),
    isActive: boolean('is_active').default(true),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => ({
    priorityDeptIdx: index('idx_sla_priority_dept').on(table.priority, table.department),
  })
);

// ---------- sla_logs (track breaches) ----------
export const slaLogs = pgTable(
  'sla_logs',
  {
    id: serial('id').primaryKey(),
    ticketId: serial('ticket_id')
      .notNull()
      .references(() => tickets.id, { onDelete: 'cascade' }),
    policyId: serial('policy_id')
      .notNull()
      .references(() => slaPolicies.id),
    breachedType: varchar('breached_type', { length: 20 }).notNull(), // 'response' or 'resolution'
    breachedAt: timestamp('breached_at').defaultNow().notNull(),
    notifiedAt: timestamp('notified_at'),
  },
  (table) => ({
    ticketIdIdx: index('idx_sla_logs_ticket_id').on(table.ticketId),
  })
);

// ---------- kb_articles (knowledge base) ----------
export const kbArticles = pgTable(
  'kb_articles',
  {
    id: serial('id').primaryKey(),
    title: text('title').notNull(),
    slug: varchar('slug', { length: 255 }).unique().notNull(),
    content: text('content').notNull(), // HTML or Markdown
    category: varchar('category', { length: 100 }),
    tags: text('tags').array(),
    authorId: varchar('author_id', { length: 255 }).notNull(), // Keycloak ID
    views: integer('views').default(0),
    helpful: integer('helpful').default(0),
    notHelpful: integer('not_helpful').default(0),
    isPublished: boolean('is_published').default(false),
    publishedAt: timestamp('published_at'),
    createdAt: timestamp('created_at').defaultNow(),
    updatedAt: timestamp('updated_at').defaultNow(),
  },
  (table) => ({
    slugIdx: uniqueIndex('idx_kb_slug').on(table.slug),
    categoryIdx: index('idx_kb_category').on(table.category),
    publishedIdx: index('idx_kb_published').on(table.isPublished),
  })
);

// ---------- kb_feedback (user votes on articles) ----------
export const kbFeedback = pgTable(
  'kb_feedback',
  {
    id: serial('id').primaryKey(),
    articleId: serial('article_id')
      .notNull()
      .references(() => kbArticles.id, { onDelete: 'cascade' }),
    userId: varchar('user_id', { length: 255 }).notNull(), // Keycloak ID
    helpful: boolean('helpful').notNull(),
    comment: text('comment'),
    createdAt: timestamp('created_at').defaultNow(),
  },
  (table) => ({
    articleUserIdx: uniqueIndex('idx_kb_feedback_article_user').on(table.articleId, table.userId),
  })
);

// ---------- ticket_webhooks (outgoing webhooks) ----------
export const ticketWebhooks = pgTable(
  'ticket_webhooks',
  {
    id: serial('id').primaryKey(),
    url: text('url').notNull(),
    events: text('events').array().notNull(), // e.g., ['ticket.created', 'ticket.updated']
    secret: varchar('secret', { length: 255 }),
    isActive: boolean('is_active').default(true),
    createdAt: timestamp('created_at').defaultNow(),
  },
  (table) => ({
    activeIdx: index('idx_webhooks_active').on(table.isActive),
  })
);

// ---------- email_parsing_rules (for email-to-ticket) ----------
export const emailParsingRules = pgTable(
  'email_parsing_rules',
  {
    id: serial('id').primaryKey(),
    inboundEmail: varchar('inbound_email', { length: 255 }).unique().notNull(), // e.g., billing@webgenix.com
    forwardToDepartment: ticketDepartmentEnum('forward_to_department'),
    defaultPriority: ticketPriorityEnum('default_priority').default('normal'),
    isActive: boolean('is_active').default(true),
    createdAt: timestamp('created_at').defaultNow(),
  },
  (table) => ({
    inboundEmailIdx: uniqueIndex('idx_email_rules_inbound').on(table.inboundEmail),
  })
);

// =====================================================
// 3. RELATIONS (for Drizzle's relational queries)
// =====================================================

export const ticketsRelations = relations(tickets, ({ many, one }) => ({
  messages: many(ticketMessages),
  assignments: many(ticketAssignments),
  statusHistory: many(ticketStatusHistory),
  slaLogs: many(slaLogs),
}));

export const ticketMessagesRelations = relations(ticketMessages, ({ one, many }) => ({
  ticket: one(tickets, { fields: [ticketMessages.ticketId], references: [tickets.id] }),
  attachments: many(ticketAttachments),
}));

export const ticketAttachmentsRelations = relations(ticketAttachments, ({ one }) => ({
  message: one(ticketMessages, { fields: [ticketAttachments.messageId], references: [ticketMessages.id] }),
}));

export const slaPoliciesRelations = relations(slaPolicies, ({ many }) => ({
  logs: many(slaLogs),
}));

export const kbArticlesRelations = relations(kbArticles, ({ many }) => ({
  feedback: many(kbFeedback),
}));