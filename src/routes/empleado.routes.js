import {Router} from 'express'
import{ getEmpleado } from '../controllers/empleado.controllers'

const router=Router();

//Consulta general de la tabla Empleados
router.get('/empleados',getEmpleado);

export default router;