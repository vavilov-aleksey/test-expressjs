import { Router } from "express";
import { getAllData, createArticle, deleteArticle } from "../controllers/servers.js";

export const serverRouter = Router();

serverRouter.get("/api/server", getAllData);

serverRouter.post("/api/server", createArticle);

serverRouter.delete("/api/server/:articleId", deleteArticle);
