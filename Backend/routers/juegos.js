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


// M.M
// 
juegos.post("/", (req, res) => {

  let { Titulo, Descripcion, Precio } = req.body;
  let values = [Titulo, Descripcion, Precio];  
 
  conn.query("INSERT INTO juegos (Titulo, Descripcion, Precio) VALUES (?,?,?)", values, (err, result)=>{

  if(err) {
     res.status(500).json({ error: err });
  } else {
        res.status(200).json({ "message": result });
     }
  })

 });
 

// M.M
//  
juegos.put("/actualizarJuego/:id", (req, res) => {

  let { id } = req.params;
  let { Titulo, Descripcion, Precio } = req.body;
  let values = [Titulo, Descripcion, Precio, id];

    conn.query("UPDATE juegos SET Titulo = ?, Descripcion = ?, Precio = ? WHERE ID_Juego = ?", values, (err, result)=>{
      if(err) {
    console.log("error:", err.message );
    res.status(500).json({ "message" : "El juego no se pudo actualizar" });
    }else {
      res.status(200).json({ "message" : "El juego se ha actualizado con exito" });
  }
    })
});


// M.M
// 
juegos.delete("/:id",  (req, res) => {

let { id } = req.params;
  
conn.query("DELETE FROM juegos WHERE ID_Juego = ?", [id], (err, result)=>{
    if(err) {
      // res.statu(500).json({ "message" : "the franchise still existent" });
      res.send("No se logro borrar este juego, sigue existiendo")
  }else {
      // res.statu(200).send( "the franchise has been delete succesfully" );
      res.send("El juego ha sido borrado exitosamente")
  }
   
  })
  });

export default juegos;