import { Router } from "express";
import conn from "../db/conn.js";
const comentarios = Router();


comentarios.get("/", (req, res) => {

  conn.query("SELECT * FROM comentarios", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});

// M.M
//  
comentarios.post("/", (req, res) => {

  let { resena, recomienda, ID_usuario, ID_juego } = req.body;
  let values = [resena, recomienda, ID_usuario, ID_juego];  
 
  conn.query("INSERT INTO comentarios (resena, recomienda, ID_usuario, ID_juego) VALUES (?,?,?,?)", values, (err, result)=>{

  if(err) {
     res.status(500).json({ "error" : err.message });
  } else {
        res.status(200).json({ "message": "Se ha realizado un comentario a un juego" });
     }
  })

 });


// M.M
//  
 comentarios.put("/editarComentario/:id", (req, res) => {

  let { id } = req.params;
  let { resena, recomienda, ID_usuario, ID_juego } = req.body;
  let values = [resena, recomienda, ID_usuario, ID_juego, id];

    conn.query("UPDATE comentarios SET resena = ?, recomienda = ?, ID_usuario = ?, ID_juego = ? WHERE ID_comentario = ?", values, (err, result)=>{
      if(err) {
    // console.log("error in the moment to make a query type PUT for users", err.message );
    res.status(500).json({ "error" : err.message });
    }else {
      res.status(200).json({ "message" : "El comentario ha sido actulizado, maldito tirano" });
  }
    })
})

export default comentarios;