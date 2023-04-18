import { Router } from 'express'
import{getPuestos} from '../controllers/puestos.controllers'

const router=Router();

//Consulta general de la tabla Areas
router.get('/puestos',getPuestos);

export default router;