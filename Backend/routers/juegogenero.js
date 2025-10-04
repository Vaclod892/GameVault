import { Router } from "express";
import conn from "../db/conn.js";
const juegogenero = Router();


juegogenero.get("/", (req, res) => {

  conn.query("SELECT * FROM juegogenero", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default juegogenero;