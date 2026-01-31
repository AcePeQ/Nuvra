import express from "express";
import {
  allProducts,
  allShowcaseProducts,
  product,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/products", allProducts);

router.get("/showcaseProducts", allShowcaseProducts);

router.get("/product", product);

export default router;
