import { Router } from 'express';
import {
  getAllAccounts
} from '../controllers/accountController.js';

const router = Router();

router.get('/', getAllAccounts);

export default router;
