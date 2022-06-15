import mongoose from "mongoose";
//creamos la base de datos
//creamos el esquema

const usuarioSchema = mongoose.Schema({
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

})
//Se crea el registro del modelo
const usuario = mongoose.model("Usuario", usuarioSchema);
export default usuario;

