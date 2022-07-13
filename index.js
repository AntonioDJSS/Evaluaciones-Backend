import express from "express";
//importamos la dependencia para que agarre el env
import dotenv from "dotenv";
//Importamos la base
//en las dependecias cuando se instalan y se importan no ocupamos al final el .js en los que creamos nostros como el de db si lo lleva la ext .js
import conectarDB from "./config/db.js";
//Importamos las rutas de evaluaciones
import evaluacionesRoutes from "./routes/evaluacionesRoutes.js"
//Importamos las rutas de preguntas
import preguntasRoutes from "./routes/preguntasRoutes.js"
//Importamos las rutas de residuos
import residuosRoutes from "./routes/residuosRoutes.js"
//Importamos la dependencia cors para solucionar el error en el front cuando hacemos una peticion al back
import usuarioRoutes from "./routes/usuarioRoutes.js"

import encuestaSatisfaccionRoutes from "./routes/encuestaSatifaccionRoutes.js"

//con cors evitamos que alguien acceda a la api
import cors from "cors";
//Funcionalidad para el servidor
const app = express();
//config posman
app.use(express.json());
//Escanea y busca el archivo dentro de .env
dotenv.config();
//Mandamos a llamar la funcion que se creo en db.js
conectarDB();
//conf los cors
const dominiosPermitidos = [process.env.FRONTEND_URL]
const corsOptions = {
    origin: function (origin, callback) {
        if (dominiosPermitidos.indexOf(origin) !== -1) {
            //El origen del equest esta permitido
            callback(null, true)
        } else {
            callback(new Error('No permitido por CORS'))
        }
    }
}
app.use(cors(corsOptions));
  /*

//Cramos la pag para correr en el navegador
app.use("/",(req,res)=>{
    res.send("Hola mundo");
}); */
//Puerto para que corra
const PORT = process.env.PORT || 4000
//Puerto para que corra
app.listen(PORT, () => {
    console.log(`Servidor ejecutando en el puerto ${PORT}`);
});
/* jalamos la info del ..env de mongoUri
console.log(process.env.MONGO_URI); */
app.use("/evaluaciones", evaluacionesRoutes);
app.use("/preguntas", preguntasRoutes);
app.use("/usuario", usuarioRoutes);
app.use("/residuos", residuosRoutes);
app.use("/atmosferas", encuestaSatisfaccionRoutes);


