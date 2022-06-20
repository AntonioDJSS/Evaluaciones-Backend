import Residuos from "../models/Residuos.js"

const registrar = async(req, res)=>{

    try{
        const residuos = new Residuos(req.body);
        const guardarResiduos = await residuos.save();
        res.json({guardarResiduos});
    }catch(error){
        console.log(error)
    }
}
export {registrar};