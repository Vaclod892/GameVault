import { Router } from "express";
import conn from "../db/conn.js";
const juego_plataforma = Router();


juego_plataforma.get("/", (req, res) => {

  conn.query("SELECT * FROM juego_plataforma", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default juego_plataforma;