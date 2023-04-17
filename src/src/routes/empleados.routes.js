import {Router} from 'express'
import {getEmpleados,createEmpleado,deleteEmpleadoById, updateEmpleado  }from '../controllers/empleados.controllers';
const router=Router();
/*CRUD DE Empleados*/
router.get('/empleados', getEmpleados);
//Consulta a inventario por Id
router.get('/empleados/:id', getEmpleadosoById);
//Agregar datos a la tabla de inventario
router.post('/empleados', createEmpleado);
//Eliminar de la tabla de inventarios
router.delete('/empleados/:id', deleteEmpleadoById);

//Actualizar la tabla de inventarios
router.put('/empleados/:id', updateEmpleado );

export default router;