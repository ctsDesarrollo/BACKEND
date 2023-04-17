import {cofig} from "dotenv";
import { getConnection, sql, empleadosQ } from "../database";
import { query } from "mssql";


export const getEmpleados=async(req, resp)=>{
    try {
        const pool=await getConnection();
        const result=await pool.request().query(empleadosQ.getEmpleados);
    } catch (error) {
        
    }
}