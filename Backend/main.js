import { Router } from "express";
import juegos from "./routers/juegos.js";
import generos from "./routers/generos.js";
import cantidadDeJugadores from "./routers/cantidadDeJugadores.js";
import plataforma from "./routers/plataformas.js";
import juegogenero from "./routers/juegogenero.js";
import juego_cantidad_jugadores from "./routers/juego_cantidad_jugadores.js";
import comentarios from "./routers/comentarios.js";
import compras from "./routers/compras.js";
import juego_plataforma from "./routers/juego_plataforma.js";
import metodos from "./routers/metodos.js";
import usuarios from "./routers/usuarios.js";

const main = Router();

main.use("/juegos", juegos);
main.use("/generos", generos);
main.use("/cantidadDeJugadores", cantidadDeJugadores);
main.use("/plataforma", plataforma);
main.use("/juegogenero", juegogenero);
main.use("/juego_cantidad_jugadores", juego_cantidad_jugadores);
main.use("/comentarios", comentarios);
main.use("/compras", compras);
main.use("/juego_plataforma",juego_plataforma);
main.use("/metodos", metodos);
main.use("/usuarios", usuarios)

export default main;