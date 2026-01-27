import expres from "express";
import { showcaseReviews } from "../controllers/reviews.controllers.js";

const router = expres.Router();

router.get("/showcaseReviews", showcaseReviews);

export default router;
