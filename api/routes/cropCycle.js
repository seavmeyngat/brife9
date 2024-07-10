import { Router } from 'express';
import {
  getAllCropCycles
} from '../controllers/cropCycleController.js';

const router = Router();

router.get('/', getAllCropCycles);

export default router;
