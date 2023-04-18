import { getConnection, sql } from "../database";
import {empleadoServices} from '../services/empleadoServices';

/**Consultas a la tabla empleado */

export const getEmpleado=async(req, resp) =>{
      
    try {
        const pool= await getConnection();    
        const result=await pool.request().query(empleadoServices.getEmpleados);
        //console.log(result)
        resp.json(result)
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }

};