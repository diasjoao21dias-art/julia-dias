import { type User, type InsertUser } from "@shared/schema";

export interface IStorage {
  // Empty storage for static site
}

export class MemStorage implements IStorage {
  // Static site doesn't use storage
}

export const storage = new MemStorage();
