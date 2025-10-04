import { Router } from "express";
import conn from "../db/conn.js";
const juegos = Router();


juegos.get("/", (req, res) => {

  conn.query("SELECT * FROM juegos", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default juegos;