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
  adminGetAllTickets,
  adminDeleteTicket,
  adminBulkUpdate,
  adminGetStats,
} from '../controllers/ticketController.js';

const router = express.Router();

// All routes require authentication
router.use(verifyToken);

// Public (client) routes
router.post('/', createTicket);              // Create ticket
router.get('/', listTickets);                // List tickets
router.post('/:id/messages', addReply);      // Add reply
router.put('/:id', updateTicket);            // Update ticket (support/admin)
router.post('/:id/rate', rateTicket);        // Rate ticket

// Support-specific route
router.get('/support/assigned-to-me', getMyAssignedTickets);

// Admin routes (must come before generic /:id to avoid conflict)
router.get('/admin/tickets', adminGetAllTickets);
router.get('/admin/tickets/:id', adminGetTicketById);
router.delete('/admin/tickets/:id', adminDeleteTicket);
router.post('/admin/tickets/bulk', adminBulkUpdate);
router.get('/admin/stats', adminGetStats);

// Generic ticket detail route (keep LAST)
router.get('/:id', getTicketById);

export default router;