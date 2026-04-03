import express from "express";
import { verifyToken } from "../middleware/auth.js";
import { createNewTicket, fetchTickets } from "../controllers/ticketController.js";

const router = express.Router();

router.post("/", verifyToken, createNewTicket);
router.get("/", verifyToken, fetchTickets); 

export default router;
