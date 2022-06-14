//importamos el modelo de la bd
import Preguntas from "../models/Preguntas.js";

const registrar =async (req,res) =>{
    /*
    //muestra los datos que llegan en variables con posman
    const{pregunta01,pregunta02} = req.body;
    console.log(pregunta01);
    console.log(pregunta02);
    console.log(req.body); */
    //Guardan los datos con posman
    try{

        const preguntas = new Preguntas(req.body);
        const guardarPreguntas = await preguntas.save();
        res.json({guardarPreguntas});

    }catch(error){
        console.log(error);
    }
};
export { registrar};
//Probar con postman
/*
{
    "pregunta01": "Protocolo de acuerdo de paris",
    "pregunta02": "Todas las anteriores",
    "pregunta03": "Mantenimiento correctivo",
    "pregunta04": "Balance de materia",
    "pregunta05": "Fuga",
    "pregunta06": "Establecimiento de una año base y un programa de deteccion y reparacion",
    "pregunta07": "Transparencia y coeficiencia",
    "pregunta08": "Compresores, bombas neumaticas sepadrores y tanques",
    "pregunta09": "dklhwsedlnkjw",
    "pregunta10": "Siguiente paro programado o 6 meses despues de detectada, que ocurra primero",
    "pregunta11": "si se puede",
    "pregunta12": "djhfbsdnfd",
    "pregunta13": "esdkfljslkdfjs",
    "pregunta14": "kidsjsljd",
    "pregunta15": "kjdfhskjdenwskjd",
    "pregunta16": "klewdfjnlkdj",
    "pregunta17": "likedjsalidj",
    "pregunta18": "lkdefjslkd",
    "pregunta19": "ejkfdhskj",
    "pregunta20": "kwqjdghwkajsdh",
    "pregunta21": "klwiejdhewsqkedh",
    "pregunta22": "ekjdfehsdf",
    "pregunta23": "dfewrdhw",
    "pregunta24": "dwejhnwed",
    "pregunta25": "kdhjsk"
}
*/