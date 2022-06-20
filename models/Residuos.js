import mongoose from "mongoose";

const residuosSchema = mongoose.Schema({
    nombre:{
        type: String,
        //required: true,
        trim: true
    },
    email:{
        type: String,
        //required: true,
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
    }
});
const residuos = mongoose.model("residuos", residuosSchema);
export default residuos;