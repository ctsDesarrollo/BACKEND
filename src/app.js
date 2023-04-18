//configuracion basica del servidor
import express from 'express';
import  config  from './config';
//Ruta de inventario
import inventarioRoutes from './routes/inventario.routes'; 
//Ruta de Areas
import areasRoutes from './routes/areas.routes';
//Ruta Puestos
import puestosRoutes from './routes/puestos.routes';
//Ruta Empleados
import empleadoRoutes from './routes/empleado.routes';
//Ruta Activos
import activosRoutes from './routes/activos.routes';


const app = express()
app.set('port', config.port)
//--------------Middlewares

app.use(express.json())
app.use(express.urlencoded({extended:false}));
//--Inventario
app.use(inventarioRoutes);
//--Areas
app.use(areasRoutes);
//--Puestos
app.use(puestosRoutes);
//--Empleados
app.use(empleadoRoutes);
//--activos
app.use(activosRoutes);




export default app
