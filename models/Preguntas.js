import mongoose from "mongoose";
//creamos la base de datos
//creamos el esquema

const preguntasSchema = mongoose.Schema({
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

})
//Se crea el registro del modelo
const preguntas = mongoose.model("preguntas", preguntasSchema);
export default preguntas;

