import { Router } from "express";
import { handleGetNote, handleGetNotes, handleCreateNote } from "../controllers/note.controller.js";

const router = Router();

router.get("/", handleGetNotes);

router.get("/:id", handleGetNote);

router.post("/", handleCreateNote);

export default router;
