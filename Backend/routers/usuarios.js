import { Router } from "express";
import conn from "../db/conn.js";
const usuarios = Router();


usuarios.get("/", (req, res) => {

  conn.query("SELECT * FROM usuarios", (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }
    res.json(results);
  });
});


// M.M
// 
usuarios.post("/", (req, res) => {

  let { nombreUsuario, email, contrasena } = req.body;
  let values = [nombreUsuario, email, contrasena];  
 
  conn.query("INSERT INTO usuarios (nombreUsuario, email, contrasena) VALUES (?, ?, ?)", values, (err, result)=>{

  if(err) {
     res.status(500).json({ error: err.message });
  } else {
      res.status(200).json({ "message": "El usuario ha sido creado "});
     }
  })

 });

 
// M.M
// 
 usuarios.delete("/borrar/:id",  (req, res) => {

  let { id } = req.params;
    
  conn.query("DELETE FROM usuarios WHERE id_usuario = ?", [id], (err, result)=>{
      if(err) {
       res.status(500).json({ error : err.message  });
       //  res.send("No se logro borrar este usuario, el usuario sigue existiendo sigue existiendo");
    }else {
        // res.statu(200).send( "the franchise has been delete succesfully" );
        res.send("El usuarios ha sido borrado exitosamente");
    }
     
    })
    }); 

export default usuarios;