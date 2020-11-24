import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db.js";
import colors from "colors";

import noteRoutes from "./routes/noteRoutes.js";

dotenv.config();

connectDB();

const app = express(); // main thing

app.get("/", (req, res) => {
  res.send("API is running..");
});

app.use("/api/notes", noteRoutes);

const PORT = process.env.PORT || 5000;

app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port ${PORT}..`.yellow
      .bold
  )
);
