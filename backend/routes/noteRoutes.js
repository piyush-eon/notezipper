import express from "express";
import { getNoteById, getNotes } from "../controllers/noteController.js";
const router = express.Router();

router.route("/").get(getNotes);
router.route("/:id").get(getNoteById);

export default router;
