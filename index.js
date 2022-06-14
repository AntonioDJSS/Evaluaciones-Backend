import express  from "express";
//importamos la dependencia para que agarre el env
import  dotenv  from "dotenv";
//Importamos la base
//en las dependecias cuando se instalan y se importan no ocupamos al final el .js en los que creamos nostros como el de db si lo lleva la ext .js
import conectarDB from "./config/db.js";
//Importamos las rutas de evaluaciones
import evaluacionesRoutes from  "./routes/evaluacionesRoutes.js"
//Importamos las rutas de preguntas
import preguntasRoutes from "./routes/preguntasRoutes.js"
//Funcionalidad para el servidor
const app = express();
//config posman
app.use(express.json());
//Escanea y busca el archivo dentro de .env
dotenv.config();
//Mandamos a llamar la funcion que se creo en db.js
conectarDB();
/*
//Cramos la pag para correr en el navegador
app.use("/",(req,res)=>{
    res.send("Hola mundo");
}); */
//Puerto para que corra
const PORT = process.env.PORT || 4000
//Puerto para que corra
app.listen(PORT, () =>{
    console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
/* jalamos la info del ..env de mongoUri
console.log(process.env.MONGO_URI); */
app.use("/evaluaciones",evaluacionesRoutes);
app.use("/preguntas",preguntasRoutes);

