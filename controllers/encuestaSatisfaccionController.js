import EncuestaSatisfaccion from "../models/EncuestaSatisfaccion.js";

const registrar = async(req, res)=>{

    try{
        const encuestaSatisfaccion = new EncuestaSatisfaccion(req.body);
        const guardarEncuestaSatisfaccion = await encuestaSatisfaccion.save();
        res.json({guardarEncuestaSatisfaccion});
    }catch(error){
        console.log(error)
    }
}
export {registrar};