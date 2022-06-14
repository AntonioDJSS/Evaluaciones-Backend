import mongoose from "mongoose";
//creamos la base de datos
//creamos el esquema

const preguntasSchema = mongoose.Schema({
    pregunta01:{
        type: String,
        required: true,
        trim: true
    },
    incisoA01:{
        type: String,
        trim: true
    },
    incisoB01:{
        type: String,
        trim: true
    },
    incisoC01:{
        type: String,
        trim: true
    },
    incisoD01:{
        type: String,
        trim: true
    },
    pregunta02:{
        type: String,
        required: true,
        trim: true
    },
    incisoA02:{
        type: String,
        trim: true
    },
    incisoB02:{
        type: String,
        trim: true
    },
    incisoC02:{
        type: String,
        trim: true
    },
    incisoD02:{
        type: String,
        trim: true
    },
    pregunta03:{
        type: String,
        required: true,
        trim: true
    },
    incisoA03:{
        type: String,
        trim: true
    },
    incisoB03:{
        type: String,
        trim: true
    },
    incisoC03:{
        type: String,
        trim: true
    },
    incisoD03:{
        type: String,
        trim: true
    },
    pregunta04:{
        type: String,
        required: true,
        trim: true
    },
    incisoA04:{
        type: String,
        trim: true
    },
    incisoB04:{
        type: String,
        trim: true
    },
    incisoC04:{
        type: String,
        trim: true
    },
    incisoD04:{
        type: String,
        trim: true
    },
    pregunta05:{
        type: String,
        required: true,
        trim: true
    },
    incisoA05:{
        type: String,
        trim: true
    },
    incisoB05:{
        type: String,
        trim: true
    },
    incisoC05:{
        type: String,
        trim: true
    },
    incisoD05:{
        type: String,
        trim: true
    },
    pregunta06:{
        type: String,
        required: true,
        trim: true
    },
    incisoA06:{
        type: String,
        trim: true
    },
    incisoB06:{
        type: String,
        trim: true
    },
    incisoC06:{
        type: String,
        trim: true
    },
    incisoD06:{
        type: String,
        trim: true
    },
    pregunta07:{
        type: String,
        required: true,
        trim: true
    },
    incisoA07:{
        type: String,
        trim: true
    },
    incisoB07:{
        type: String,
        trim: true
    },
    incisoC07:{
        type: String,
        trim: true
    },
    incisoD07:{
        type: String,
        trim: true
    },
    pregunta08: {
        type: String,
        required: true,
        trim: true
    },
    incisoA08:{
        type: String,
        trim: true
    },
    incisoB08:{
        type: String,
        trim: true
    },
    incisoC08:{
        type: String,
        trim: true
    },
    incisoD08:{
        type: String,
        trim: true
    },
    pregunta09:{
        type: String,
        required: true,
        trim: true
    },
    incisoA09:{
        type: String,
        trim: true
    },
    incisoB09:{
        type: String,
        trim: true
    },
    incisoC09:{
        type: String,
        trim: true
    },
    incisoD09:{
        type: String,
        trim: true
    },
    pregunta10:{
        type: String,
        required: true,
        trim: true
    },
    incisoA10:{
        type: String,
        trim: true
    },
    incisoB10:{
        type: String,
        trim: true
    },
    incisoC10:{
        type: String,
        trim: true
    },
    incisoD10:{
        type: String,
        trim: true
    },
    pregunta11:{
        type: String,
        required: true,
        trim: true
    },
    incisoA11:{
        type: String,
        trim: true
    },
    incisoB11:{
        type: String,
        trim: true
    },
    incisoC11:{
        type: String,
        trim: true
    },
    incisoD11:{
        type: String,
        trim: true
    },
    pregunta12:{
        type: String,
        required: true,
        trim: true
    },
    incisoA12:{
        type: String,
        trim: true
    },
    incisoB12:{
        type: String,
        trim: true
    },
    incisoC12:{
        type: String,
        trim: true
    },
    incisoD12:{
        type: String,
        trim: true
    },
    pregunta13:{
        type: String,
        required: true,
        trim: true
    },
    incisoA13:{
        type: String,
        trim: true
    },
    incisoB13:{
        type: String,
        trim: true
    },
    incisoC13:{
        type: String,
        trim: true
    },
    incisoD13:{
        type: String,
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

