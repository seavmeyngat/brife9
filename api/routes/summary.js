import { Router } from "express";
import {
  getTotalFarmers,
  getTotalFarmlands,
  getActiveCropCycles,
  getTotalFarmlandSize
} from "../controllers/summaryController.js";

const router = Router();

router.get("/total-farmers", getTotalFarmers);
router.get("/total-farmlands", getTotalFarmlands);
router.get("/active-crop-cycles", getActiveCropCycles);
router.get("/total-farmland-size", getTotalFarmlandSize);

export default router;
