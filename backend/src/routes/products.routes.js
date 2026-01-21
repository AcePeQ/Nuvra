import express from "express";
import { allProducts } from "../controllers/products.controllers.js";

const router = express.Router();

router.get("/products", allProducts);

export default router;
