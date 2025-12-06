import { Router } from "express";
import conn from "../db/conn.js";
const juegos = Router();

// V.V: Modificamos la ruta GET para hacer el JOIN de tablas
juegos.get("/", (req, res) => {
  const { buscar } = req.query;

  // 1. Preparamos la consulta SQL con JOINS
  // Usamos LEFT JOIN para que traiga el juego aunque no tenga plataformas asignadas (para que no desaparezca)
  let sql = `
    SELECT 
      j.ID_Juego, 
      j.Titulo, 
      j.Descripcion, 
      j.Precio,
      j.imageURL,
      GROUP_CONCAT(DISTINCT p.nombre) as plataformas_str 
    FROM juegos j
    LEFT JOIN juego_plataforma jp ON j.ID_Juego = jp.ID_juego
    LEFT JOIN plataformas p ON jp.ID_plataforma = p.ID_plataforma
  `;

  let values = [];

  // 2. Filtro de búsqueda (si existe)
  if (buscar) {
    sql += " WHERE j.Titulo LIKE ?";
    values.push(`%${buscar}%`);
  }

  // 3. Agrupamos por juego para que el GROUP_CONCAT funcione
  sql += " GROUP BY j.ID_Juego";

  conn.query(sql, values, (err, results) => {
    if (err) {
      return res.status(500).json({ error: err });
    }

    // V.V: Transformación de datos (Data Massage) antes de enviar al Frontend
    // MySQL nos devuelve "PC,PS5,Xbox" como un string largo en 'plataformas_str'.
    // Lo convertimos a un array real ["PC", "PS5", "Xbox"] para que React lo pueda recorrer.
    const juegosFormateados = results.map((juego) => ({
      ...juego,
      plataformas: juego.plataformas_str
        ? juego.plataformas_str.split(",")
        : [],
    }));

    res.json(juegosFormateados);
  });
});

// M.M
//
juegos.post("/", (req, res) => {
  let { Titulo, Descripcion, Precio } = req.body;
  let values = [Titulo, Descripcion, Precio];

  conn.query(
    "INSERT INTO juegos (Titulo, Descripcion, Precio) VALUES (?,?,?)",
    values,
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err });
      } else {
        res.status(200).json({ message: result });
      }
    }
  );
});

// M.M
//
juegos.put("/actualizarJuego/:id", (req, res) => {
  let { id } = req.params;
  let { Titulo, Descripcion, Precio } = req.body;
  let values = [Titulo, Descripcion, Precio, id];

  conn.query(
    "UPDATE juegos SET Titulo = ?, Descripcion = ?, Precio = ? WHERE ID_Juego = ?",
    values,
    (err, result) => {
      if (err) {
        console.log("error:", err.message);
        res.status(500).json({ message: "El juego no se pudo actualizar" });
      } else {
        res
          .status(200)
          .json({ message: "El juego se ha actualizado con exito" });
      }
    }
  );
});

// M.M
//
juegos.delete("/:id", (req, res) => {
  let { id } = req.params;

  conn.query("DELETE FROM juegos WHERE ID_Juego = ?", [id], (err, result) => {
    if (err) {
      // res.statu(500).json({ "message" : "the franchise still existent" });
      res.send("No se logro borrar este juego, sigue existiendo");
    } else {
      // res.statu(200).send( "the franchise has been delete succesfully" );
      res.send("El juego ha sido borrado exitosamente");
    }
  });
});

export default juegos;
