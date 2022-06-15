import express from "express";
//Importamos los controladores
import {registrar} from "../controllers/usuarioControllers.js"
const router = express.Router();
//ruta para /preguntas
router.post("/", registrar);
export default router;