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


// M.M
// 
compras.post("/realizarCompra", (req, res) => {

  let { fecha, descuento, id_usuario, id_juego, id_metodo, total } = req.body;
  let values = [fecha, descuento, id_usuario, id_juego, id_metodo, total];  
 
  conn.query("INSERT INTO compras (fecha, descuento, id_usuario, id_juego, id_metodo, total) VALUES (?, ?, ?, ?, ?, ?)", values, (err, result)=>{

  if(err) {
     res.status(500).json({ error: err.message });
  } else {
      res.status(200).json({ result });
     }
  })

 });

export default compras;