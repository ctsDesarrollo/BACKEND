import sql from 'mssql'
import config from '../config'

const dbSettings={
    user:config.dbUser,
    password:config.dbPass,
    server:config.dbServer,
    database:config.dbDatabase,
    options: {
        encrypt: true,
        trustServerCertificate: true 
      },
};
export async function getConnection(){   
    try {
        const pool =await sql.connect(dbSettings);
        console.log("exito");
        return pool;
    } catch (error) {
        console.log(error.messagge);
    }
}

export {sql};
