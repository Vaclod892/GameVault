import { Router } from "express";
import conn from "../db/conn.js";
const plataforma = Router();


plataforma.get("/", (req, res) => {

  conn.query("SELECT * FROM plataformas", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default plataforma;