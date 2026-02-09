import expres from "express";
import {
  productReviews,
  showcaseReviews,
} from "../controllers/reviews.controllers.js";

const router = expres.Router();

router.get("/showcaseReviews", showcaseReviews);

router.get("/productReviews", productReviews);

export default router;
