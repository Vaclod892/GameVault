import { Router } from "express";
import conn from "../db/conn.js";
const compras = Router();


compras.get("/", (req, res) => {

  conn.query("SELECT * FROM compras", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

export default compras;