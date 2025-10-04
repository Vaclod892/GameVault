import { Router } from "express";
import conn from "../db/conn.js";
const metodos = Router();


metodos.get("/", (req, res) => {

  conn.query("SELECT * FROM metodos", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default metodos;