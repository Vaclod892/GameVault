import { Router } from "express";
import conn from "../db/conn.js";

const generos = Router();


generos.get("/", (req, res) => {

  conn.query("SELECT * FROM generos", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default generos;