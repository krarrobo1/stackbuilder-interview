import { Router } from 'express';
import { PicoPlacaController } from '../controllers/picoPlaca.controller';

const picoPlataRoutes = Router();

picoPlataRoutes.post('/plateCheck', PicoPlacaController.plateCheck);

export default picoPlataRoutes;