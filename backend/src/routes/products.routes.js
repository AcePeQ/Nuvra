import express from "express";
import {
  allProducts,
  allShowcaseProducts,
  product,
  searchProduct,
} from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/products", allProducts);

router.get("/showcaseProducts", allShowcaseProducts);

router.get("/product", product);

router.get("/search", searchProduct);

export default router;
