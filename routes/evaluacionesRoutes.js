import express from "express";
//Importamos los controladores
import {registrar} from "../controllers/evaluacionController.js"
const router = express.Router();
//ruta para /evaluaciones
router.post("/", registrar);
export default router;