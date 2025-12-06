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
  conn.query(
    "SELECT * FROM usuarios WHERE email = ? AND contrasena = ?",
    values,
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        if (result.length > 0) {
          // Usuario encontrado
          res.status(200).json({ success: true, usuario: result[0] });
        } else {
          // Credenciales incorrectas
          res.status(401).json({
            success: false,
            message: "Email o contraseña incorrectos",
          });
        }
      }
    }
  );
});

// M.M
//
usuarios.post("/", (req, res) => {
  let { nombreUsuario, email, contrasena, foto } = req.body;
  const fotoFinal = foto || "/img/silla-default.jpg";
  let values = [nombreUsuario, email, contrasena, fotoFinal];

  conn.query(
    "INSERT INTO usuarios (nombreUsuario, email, contrasena, foto) VALUES (?, ?, ?, ?)",
    values,
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        // V.V: ¡CORRECCIÓN CLAVE!
        // Devolvemos el usuario completo CON el ID que acaba de crear la DB (result.insertId)
        const nuevoUsuario = {
          ID_usuario: result.insertId,
          nombreUsuario,
          email,
          contrasena,
          foto: fotoFinal,
        };

        res.status(200).json({
          message: "El usuario ha sido creado",
          usuario: nuevoUsuario,
        });
      }
    }
  );
});

// M.M
//
usuarios.delete("/borrar/:id", (req, res) => {
  let { id } = req.params;

  conn.query(
    "DELETE FROM usuarios WHERE id_usuario = ?",
    [id],
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        // V.V: Verificamos si realmente se borró algo
        if (result.affectedRows === 0) {
          // Si no borró nada (porque el ID era incorrecto o undefined), devolvemos error
          res
            .status(404)
            .json({ message: "No se encontró el usuario para borrar" });
        } else {
          res
            .status(200)
            .json({ message: "El usuario ha sido borrado exitosamente" });
        }
      }
    }
  );
});

// V.V: Nueva ruta para EDITAR (Update) los datos del usuario
usuarios.put("/editar/:id", (req, res) => {
  const { id } = req.params;
  const { nombreUsuario, email, contrasena, foto } = req.body;

  const sql =
    "UPDATE usuarios SET nombreUsuario = ?, email = ?, contrasena = ?, foto = ? WHERE ID_usuario = ?";
  const values = [nombreUsuario, email, contrasena, foto, id];

  conn.query(sql, values, (err, result) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      // Devolvemos los datos actualizados para que el frontend se actualice al instante
      res.status(200).json({
        message: "Usuario actualizado",
        usuario: { ID_usuario: id, nombreUsuario, email, contrasena, foto },
      });
    }
  });
});

export default usuarios;
