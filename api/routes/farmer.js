import { Router } from 'express';
import {
  getAllFarmers,
  getFarmerById,
  addFarmer,
  updateFarmer,
  deleteFarmer,
} from '../controllers/farmerController.js';

const router = Router();

router.get('/', getAllFarmers);
router.get('/:id', getFarmerById);
router.post('/', addFarmer);
router.put('/:id', updateFarmer);
router.delete('/:id', deleteFarmer);

export default router;
