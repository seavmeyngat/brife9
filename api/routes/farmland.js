import { Router } from 'express';
import {
  getAllFarmlands,
  getFarmlandById,
  addFarmland,
  updateFarmland,
  deleteFarmland,
} from '../controllers/farmlandController.js';

const router = Router();

router.get('/', getAllFarmlands);
router.get('/:id', getFarmlandById);
router.post('/', addFarmland);
router.put('/:id', updateFarmland);
router.delete('/:id', deleteFarmland);

export default router;
