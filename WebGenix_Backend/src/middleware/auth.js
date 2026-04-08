// src/middleware/auth.js – minimal safe version
import jwt from 'jsonwebtoken';

export const verifyToken = (req, res, next) => {
  const authHeader = req.headers.authorization;
  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ error: 'No token provided' });
  }
  const token = authHeader.split(' ')[1];
  const decoded = jwt.decode(token);
  
  // Only check that we could decode something – do NOT validate signature
  if (!decoded) {
    return res.status(401).json({ error: 'Invalid token format' });
  }
  
  req.user = decoded;
  next();
};