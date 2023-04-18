import {Router} from 'express'
import {
    createInventario,
    deleteInventarioById,
    getInventario,
    getInventarioById,
    updateInventario
     
}from '../controllers/inventario.controllers';

const router= Router();

/**CRUD de tabla de inventarios */
//Consulta general de la tabla de inventario
router.get('/inventario', getInventario);
//Consulta a inventario por Id
router.get('/inventario/:id', getInventarioById);
//Agregar datos a la tabla de inventario
router.post('/inventario', createInventario);
//Eliminar de la tabla de inventarios
router.delete('/inventario/:id', deleteInventarioById);

//Actualizar la tabla de inventarios
router.put('/inventario/:id', updateInventario );

export default router;