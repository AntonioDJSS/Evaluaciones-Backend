import mongoose from "mongoose";
//creamos la base de datos
//creamos el esquema

const encuestaSatisfaccionSchema = mongoose.Schema({
    nombre:{
        type: String,
        required: true,
        trim: true // eliminamos espacios en blanco
    },
    email:{
        type: String,
        unique: true,
        required: true,
        trim: true
    },
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
    },
    respuesta16:{
        type: String,
        required: true,
        trim: true
    },
    respuesta17:{
        type: String,
        required: true,
        trim: true

    }

})
//Se crea el registro del modelo
const EncuestaSatisfaccion = mongoose.model("EncuestaSatisfaccion", encuestaSatisfaccionSchema);
export default EncuestaSatisfaccion;

