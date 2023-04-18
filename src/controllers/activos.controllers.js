import {getConnection, sql} from '../database';
import {activosServices} from '../services/activoServices';
//Consultas a la tabla de Activos 


/**Consultas */
export const getActivos = async (req, resp)=> {   
   
    try {
        const pool= await getConnection();    
        const result=await pool.request().query(activosServices.getActivosTodo);
        //console.log(result)
        resp.json(result)
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }

};