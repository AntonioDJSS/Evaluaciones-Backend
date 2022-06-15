import mongoose from "mongoose";
//Creamos la base de datos
//Se crea el esquema
const evaluacioneSchema = mongoose.Schema({
    respuesta01:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta02:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta03:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta04:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta05:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta06:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta07:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta08: {
        type: String,
        //required: true,
        trim: true
    },
    respuesta09:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta10:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta11:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta12:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta13:{
        type: String,
        required: true,
        trim: true
    },
    respuesta14:{
        type: String,
        //required: true,
        trim: true
    },
    respuesta15:{
        type: String,
        //required: true,
        trim: true
    }
    /*,
    respuesta16:{
        type: String,
        required: true,
        trim: true
    },
    respuesta17:{
        type: String,
        required: true,
        trim: true

    },
    respuesta18:{
        type: String,
        required: true,
        trim: true
    },
    respuesta19:{
        type: String,
        required: true,
        trim: true
    },
    respuesta20:{
        type: String,
        required: true,
        trim: true
    },
    respuesta21:{
        type: String,
        required: true,
        trim: true
    },
    respuesta22:{
        type: String,
        required: true,
        trim: true
    },
    respuesta23:{
        type: String,
        required: true,
        trim: true
    },
    respuesta24:{
        type: String,
        required: true,
        trim: true
    },
    respuesta25:{
        type: String,
        required: true,
        trim: true
    } */

   
 });
 //Se crea el registro del modelo
 const evaluaciones = mongoose.model("evaluaciones",evaluacioneSchema);

 export default evaluaciones;