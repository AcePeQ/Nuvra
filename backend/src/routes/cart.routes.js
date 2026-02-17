import express from "express";
import { promoCode } from "../controllers/cart.controllers.js";

const router = express.Router();

router.get("/promoCode", promoCode);

export default router;
