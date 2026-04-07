// src/utils/generateTicketId.js
export function generateTicketId() {
  // Format: T-XXXXX (5 random digits)
  const random = Math.floor(10000 + Math.random() * 90000);
  return `T-${random}`;
}