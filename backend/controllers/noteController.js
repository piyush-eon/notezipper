import Note from "../models/noteModel.js";
import asyncHandler from "express-async-handler";

//@description     Fetch all Notes
//@route           GET /api/notes
//@access          Public
const getNotes = asyncHandler(async (req, res) => {
  const notes = await Note.find({});

  res.json(notes);
});

//@description     Fetch single Note
//@route           GET /api/notes/:id
//@access          Public
const getNoteById = asyncHandler(async (req, res) => {
  const note = await Note.findById(req.params.id);

  if (note) {
    res.json(note);
  } else {
    res.status(404).json({ message: "Note not found" });
  }

  res.json(note);
});

export { getNoteById, getNotes };
