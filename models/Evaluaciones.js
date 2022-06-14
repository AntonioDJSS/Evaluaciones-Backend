import mongoose from "mongoose";
//Creamos la base de datos
//Se crea el esquema
const evaluacioneSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true // eliminamos espacios en blanco
    },
    email:{
        type: String,
        required: true,
       // unique: true,
        trim: true
    }
   
 });
 //Se crea el registro del modelo
 const evaluaciones = mongoose.model("evaluaciones",evaluacioneSchema);

 export default evaluaciones;