import express from "express";
//Importamos los controladores
import {registrar} from "../controllers/encuestaSatisfaccionController.js"
const router = express.Router();
//ruta para /evaluaciones
router.post("/", registrar);
export default router;