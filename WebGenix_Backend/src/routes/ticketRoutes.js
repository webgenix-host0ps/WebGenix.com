// src/routes/ticketRoutes.js
import express from 'express';
import { verifyToken } from '../middleware/auth.js';
import {
  createTicket,
  listTickets,
  getTicketById,
  addReply,
  updateTicket,
  rateTicket,
  getMyAssignedTickets,
  adminGetTicketById,
} from '../controllers/ticketController.js';

import {
  // ... existing imports
  adminGetAllTickets,
  adminDeleteTicket,
  adminBulkUpdate,
  adminGetStats,
} from '../controllers/ticketController.js';


const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// Create ticket
router.post('/', createTicket);

// List tickets (with filters)
router.get('/', listTickets);

// Get single ticket with messages
router.get('/:id', getTicketById);

// Add reply
router.post('/:id/messages', addReply);

// Update ticket (status, priority, assignee) – support/admin only
router.put('/:id', updateTicket);

// Rate ticket (CSAT) – client only after resolved
router.post('/:id/rate', rateTicket);

// Support: Get tickets assigned to me
router.get('/support/assigned-to-me', verifyToken, getMyAssignedTickets);

// Admin routes   
// Admin get all tickets with filters
router.get('/admin/tickets', verifyToken, adminGetAllTickets);

// Admin delete ticket
router.delete('/admin/tickets/:id', verifyToken, adminDeleteTicket);

// Admin bulk update tickets (status, priority, assignee)
router.post('/admin/tickets/bulk', verifyToken, adminBulkUpdate);

// Admin get stats
router.get('/admin/stats', verifyToken, adminGetStats);

// Admin get single ticket (with internal notes)
router.get('/admin/tickets/:id', verifyToken, adminGetTicketById);

export default router;