import { pgTable, text, serial } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod";

// No database tables required as per user request for static site
// Keeping file structure valid with minimal exports

export const users = pgTable("users", {
  id: serial("id").primaryKey(),
});

export type InsertUser = { id?: number };
export type User = { id: number };
