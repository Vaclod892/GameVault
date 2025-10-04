import { Router } from "express";
import conn from "../db/conn.js";
const juego_cantidad_jugadores = Router();


juego_cantidad_jugadores.get("/", (req, res) => {

  conn.query("SELECT * FROM juego_cantidad_jugadores", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default juego_cantidad_jugadores;