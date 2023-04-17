import { config } from "dotenv";
import { getConnection, sql, inventarioQ} from "../database";
//Consultas a la base de datos

/**--------Consultas a la tabla inventario*/
//Consulta general a la base de datos 
export const getInventario = async (req, resp)=> {   
   
    try {
        const pool= await getConnection();    
        const result=await pool.request().query(inventarioQ.getInventarioTodo);
        //console.log(result)
        resp.json(result)
    } catch (error) {
        resp.status(500);
        resp.send(error.message);
    }

};
//----Consulta de inventario por id
export const getInventarioById = async (req, resp)=>{
   
    const { id } =req.params;
    const pool=await getConnection();
    const result=await pool
    .request()
    .input('Id',id)
    .query(inventarioQ.getInventarioById);
 //console.log(result);
    resp.send(result.recordset[0]);
  
}
/**------Agregar nuevo producto a la tabla inventario */
 
export const createInventario=async (req, resp)=>{
    const {Id_inventario, Serie, Tipo, Marca, Modelo}=req.body
   //Validacion de  los datos vacios
    if(Id_inventario==null|| Serie==null||Tipo==null|| Marca==null|| Modelo==null ){
        return resp.status(400).json({msg:'Valores invalidos, no se llenaron todos los campos'})
    }
   //Insertar a la tabla inventario de la base de datos los datos obtenidos en las variables const
   try {
    const pool= await getConnection();
   await pool
   .request()
   .input('id_inventario', sql.VarChar, Id_inventario)
   .input('serie', sql.VarChar,Serie )
   .input('tipo', sql.Int, Tipo)
   .input('marca', sql.VarChar, Marca)
   .input('modelo', sql.VarChar, Modelo)
   .query(inventarioQ.addInventario);
    resp.json({Id_inventario,Serie, Tipo, Marca, Modelo});    
   } catch (error) {
    resp.status(500);
    resp.send(error.message);
   }
   
   //Prueba de envio detos
   console.log(Id_inventario, Serie, Tipo, Marca, Modelo);
    console.log("Nuevo producto agregado");
};
/**-------Actualizar la tabla de inventario */
export const updateInventario = async (req, res)=>{
    //Validacion de  los datos vacios
    if(Id_inventario==null|| Serie==null||Tipo==null|| Marca==null|| Modelo==null ||Id==null){
        return resp.status(400).json({msg:'Valores invalidos, no se llenaron todos los campos'})
    }
        try {
            const {id}= req.params;
            const {Id_inventario, Serie, Tipo, Marca, Modelo}=req.body
            const pool=await getConnection();
           const result= await pool
           .request()
           .input('Id', id)
           .input('id_inventario', sql.VarChar, Id_inventario)
           .input('serie', sql.VarChar,Serie )
           .input('tipo', sql.Int, Tipo)
           .input('marca', sql.VarChar, Marca)
           .input('modelo', sql.VarChar, Modelo)
           .query(inventarioQ.updateInventario);
           res.json({Id_inventario,Serie, Tipo, Marca, Modelo}); 
        } catch (error) {
            resp.status(500);
            resp.send(error.message);
        }          
}

/**-------Eliminar de la tabla de inventario */
export const deleteInventarioById =async(req, res)=>{   
   
        const { id } =req.params;
        const pool=await getConnection();
        const result=await pool
        .request()
        .input('Id',id)
        .query(inventarioQ.deleteInventarioById);
     // console.log(result);
        res.sendStatus(204);
      
    
}