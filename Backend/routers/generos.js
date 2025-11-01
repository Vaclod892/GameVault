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


// M.M
// 
generos.post("/crearGenero", (req, res) => {

  let { nombre } = req.body;
  let values = [nombre];  
 
  conn.query("INSERT INTO generos (nombre) VALUES (?)", values, (err, result)=>{

  if(err) {
     res.status(500).json({ error: err });
  } else {
        res.status(200).json({ "message": result });
     }
  })

 });


// M.M
//  
generos.put("/editarNombre/:id", (req, res) => {

  let { id } = req.params;
  let { nombre } = req.body;
  let values = [nombre, id];

    conn.query("UPDATE generos SET nombre = ? WHERE ID_genero = ?", values, (err, result)=>{
      if(err) {
    // console.log("error in the moment to make a query type PUT for users", err.message );
    res.status(500).json({ "error" : err.message });
    }else {
      res.status(200).json({ "message" : "El nombre del genero ha sido cambiado" });
  }
    })
}) 

export default generos;