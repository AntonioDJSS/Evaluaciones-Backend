//importamos el model de la bd
import Evaluaciones from "../models/Evaluaciones.js"
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
//Probar con posman
/* 
{
    "nombre": "vic Dessire",
    "email": "vicgg@gmail.com",
    "respuesta01": "Protocolo de acuerdo de paris",
    "respuesta02": "Todas las anteriores",
    "respuesta03": "Mantenimiento correctivo",
    "respuesta04": "Balance de materia",
    "respuesta05": "Fuga",
    "respuesta06": "Establecimiento de una año base y un programa de deteccion y reparacion",
    "respuesta07": "Transparencia y coeficiencia",
    "respuesta08": "Compresores, bombas neumaticas sepadrores y tanques",
    "respuesta09": "dklhwsedlnkjw",
    "respuesta10": "Siguiente paro programado o 6 meses despues de detectada, que ocurra primero",
    "respuesta11": "si se puede",
    "respuesta12": "djhfbsdnfd",
    "respuesta13": "esdkfljslkdfjs",
    "respuesta14": "kidsjsljd",
    "respuesta15": "kjdfhskjdenwskjd",
    "respuesta16": "klewdfjnlkdj",
    "respuesta17": "likedjsalidj",
    "respuesta18": "lkdefjslkd",
    "respuesta19": "ejkfdhskj",
    "respuesta20": "kwqjdghwkajsdh",
    "respuesta21": "klwiejdhewsqkedh",
    "respuesta22": "ekjdfehsdf",
    "respuesta23": "dfewrdhw",
    "respuesta24": "dwejhnwed",
    "respuesta25": "kdhjsk"
}
*/