import type { Express } from "express";
import type { Server } from "http";

export async function registerRoutes(
  httpServer: Server,
  app: Express
): Promise<Server> {
  // Health check for static site
  app.get("/api/status", (_req, res) => {
    res.json({ status: "online" });
  });

  return httpServer;
}
