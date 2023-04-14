//Comprobar si exite una variable de entorno creada
import { config } from "dotenv"
config();
export default{
    port:4000,
    dbUser:process.env.DBUSER||'',
    dbPass:process.env.DBPASSWORD||'',
    dbServer:process.env.DBSERVER||'',
    dbDatabase:process.env.DBDATABASE||''
}