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
    },
    pregunta01:{
        type: String,
        required: true,
        trim: true
    },
    pregunta02:{
        type: String,
        required: true,
        trim: true
    },
    pregunta03:{
        type: String,
        required: true,
        trim: true
    },
    pregunta04:{
        type: String,
        required: true,
        trim: true
    },
    pregunta05:{
        type: String,
        required: true,
        trim: true
    },
    pregunta06:{
        type: String,
        required: true,
        trim: true
    },
    pregunta07:{
        type: String,
        required: true,
        trim: true
    },
    pregunta08: {
        type: String,
        required: true,
        trim: true
    },
    pregunta09:{
        type: String,
        required: true,
        trim: true
    },
    pregunta10:{
        type: String,
        required: true,
        trim: true
    },
    pregunta11:{
        type: String,
        required: true,
        trim: true
    },
    pregunta12:{
        type: String,
        required: true,
        trim: true
    },
    pregunta13:{
        type: String,
        required: true,
        trim: true
    },
    pregunta14:{
        type: String,
        required: true,
        trim: true
    },
    pregunta15:{
        type: String,
        required: true,
        trim: true
    },
    pregunta16:{
        type: String,
        required: true,
        trim: true
    },
    pregunta17:{
        type: String,
        required: true,
        trim: true

    },
    pregunta18:{
        type: String,
        required: true,
        trim: true
    },
    pregunta19:{
        type: String,
        required: true,
        trim: true
    },
    pregunta20:{
        type: String,
        required: true,
        trim: true
    },
    pregunta21:{
        type: String,
        required: true,
        trim: true
    },
    pregunta22:{
        type: String,
        required: true,
        trim: true
    },
    pregunta23:{
        type: String,
        required: true,
        trim: true
    },
    pregunta24:{
        type: String,
        required: true,
        trim: true
    },
    pregunta25:{
        type: String,
        required: true,
        trim: true
    }

   
 });
 //Se crea el registro del modelo
 const evaluaciones = mongoose.model("evaluaciones",evaluacioneSchema);

 export default evaluaciones;