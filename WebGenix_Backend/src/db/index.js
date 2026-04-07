// src/db/index.js
import { drizzle } from 'drizzle-orm/node-postgres';
import pg from 'pg';
import * as schema from './schema.js';
import dotenv from 'dotenv';

dotenv.config();

const connectionString = process.env.DATABASE_URL;

if (!connectionString) {
  console.error("❌ DATABASE_URL is missing in .env file");
  process.exit(1);
}

const pool = new pg.Pool({
  connectionString,
  ssl: false,
});

pool.on('error', (err) => {
  console.error('❌ Unexpected PostgreSQL error:', err);
});

pool.on('connect', () => {
  console.log('✅ PostgreSQL connected successfully');
});

export const db = drizzle(pool, { schema });