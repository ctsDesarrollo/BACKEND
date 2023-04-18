
import { getConnection, sql} from "../database";
import {areaServices} from '../services/areasServices'

//Consultas a la tabla de Areas 


/**Consultas */
export const getAreas = async (req, resp)=> {   
   
    try {
        const pool= await getConnection();    
        const result=await pool.request().query(areaServices.getAreasTodo);
        //console.log(result)
        resp.json(result)
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }

};