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

// Agrega esta nueva ruta POST antes de export default usuarios
// Esta ruta verificará si el email y la contraseña coinciden
usuarios.post("/login", (req, res) => {
  const { email, contrasena } = req.body;
  const values = [email, contrasena];
 
  // NOTA: En un entorno real, las contraseñas deberían estar encriptadas (hash).
  // Como tu base de datos actual las tiene en texto plano, usamos esta comparación directa.
  conn.query("SELECT * FROM usuarios WHERE email = ? AND contrasena = ?", values, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      if (result.length > 0) {
        // Usuario encontrado
        res.status(200).json({ success: true, usuario: result[0] });
      } else {
        // Credenciales incorrectas
        res.status(401).json({ success: false, message: "Email o contraseña incorrectos" });
      }
    }
  });
});


// M.M
// 
usuarios.post("/", (req, res) => {
  // 1. Agregamos 'foto' a la desestructuración
  let { nombreUsuario, email, contrasena, foto } = req.body;

  // 2. Agregamos 'foto' al array de valores. 
  // Si no llega foto, ponemos una por defecto.
  const fotoFinal = foto || "/img/silla-default.jpg"; 
  let values = [nombreUsuario, email, contrasena, fotoFinal];

  // 3. Modificamos la consulta SQL
  conn.query("INSERT INTO usuarios (nombreUsuario, email, contrasena, foto) VALUES (?, ?, ?, ?)", values, (err, result) => {

    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.status(200).json({ "message": "El usuario ha sido creado" });
    }
  })
});


// M.M
// 
usuarios.delete("/borrar/:id", (req, res) => {

  let { id } = req.params;

  conn.query("DELETE FROM usuarios WHERE id_usuario = ?", [id], (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
      //  res.send("No se logro borrar este usuario, el usuario sigue existiendo sigue existiendo");
    } else {
      // res.statu(200).send( "the franchise has been delete succesfully" );
      res.send("El usuarios ha sido borrado exitosamente");
    }

  })
});

export default usuarios;