import { Router } from 'express';
import {
  getAllDistricts
} from '../controllers/districtController.js';

const router = Router();

router.get('/', getAllDistricts);

export default router;
