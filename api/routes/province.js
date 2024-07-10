import { Router } from 'express';
import {
  getAllProvinces
} from '../controllers/provinceController.js';

const router = Router();

router.get('/', getAllProvinces);

export default router;
