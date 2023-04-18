import {getConnection, sql} from '../database';
import {puestoServices} from '../services/puestoServices';


/**Consultas a la tala de Puestos */
export const getPuestos=async(req, resp)=>{
    try {
        const pool=await getConnection();
        const result=await pool.request().query(puestoServices.getPuestosTodo);
        resp.json(result)
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }
}
