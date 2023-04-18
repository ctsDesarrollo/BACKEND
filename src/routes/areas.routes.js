import { Router } from 'express'
import{
    getAreas

}from '../controllers/areas.controllers';

const router=Router();

//Consulta general de la tabla Areas
router.get('/areas',getAreas);

export default router;