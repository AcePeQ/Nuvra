import express from "express";
import {
  allProducts,
  allShowcaseProducts,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/products", allProducts);

router.get("/showcaseProducts", allShowcaseProducts);

export default router;
