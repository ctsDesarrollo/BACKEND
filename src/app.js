//configuracion basica del servidor
import express from 'express';
import  config  from './config';
//Ruta de inventario
import inventarioRoutes from './routes/inventario.routes'; 

const app = express()
app.set('port', config.port)
//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}));
app.use(inventarioRoutes);



export default app
