import{Router} from 'express';
import {getActivos} from '../controllers/activos.controllers';

const router=Router();

//Consulta general a la tabla Activos
router.get('/activos', getActivos);
export default router;