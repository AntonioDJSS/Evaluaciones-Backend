//importamos el model de la bd
import usuario from "../models/Usuario.js";
const registrar =async (req,res) =>{
    /*
    //muestra los datos que llegan en variables con posman
    const{nombre,correo} = req.body;
    console.log(nombre);
    console.log(correo);
    console.log(req.body); */
    //Guardan los datos con posman
    try{

        const evaluacion = new Evaluaciones(req.body);
        const guardarEvaluacion = await evaluacion.save();
        res.json({guardarEvaluacion});

    }catch(error){
        console.log(error);
    }
};
export { registrar};