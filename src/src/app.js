//configuracion basica del servidor
import express from 'express';
import  config  from './config';
//Ruta de inventario
import inventarioRoutes from './routes/inventario.routes'; 
//Ruta de Empleados
import empleadosRoutes from './routes/empleados.routes';

const app = express()
app.set('port', config.port)
//Middlewares
app.use(express.json())
app.use(express.urlencoded({extended:false}));
//Inventario
app.use(inventarioRoutes);
//Empleados
app.use(empleadosRoutes);


export default app
