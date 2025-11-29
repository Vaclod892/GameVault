import conn from "./db/conn.js";
import cors from "cors";
import main from "./main.js";
import express from "express";

const app = express();
const port = 3030;

app.use(express.json());

//M.M
//adicion de cors al archivo principal
app.use(cors());

conn.connect((err) => {
  if (err) {
    console.error("Error al conectar con la BD:", err);
    return;
  }
  console.log("Conectado a la base de datos MySQL - Hola ");
});



app.use("/api", main)


app.get("/", (req, res) => {
  res.send("hola mundo"); 
});


















app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:`+port);
});
