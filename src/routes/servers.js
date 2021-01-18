import { Router } from "express";
import { getAllData, createArticle } from "../controllers/servers.js";

export const serverRouter = Router();

serverRouter.get("/api/server", getAllData);

serverRouter.post("/api/server", createArticle);
