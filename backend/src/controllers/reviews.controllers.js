import {
  getAllReviews,
  getProductReviews,
} from "../services/reviews.service.js";
import { returnUniqueRandomItems } from "../utils/helpers.js";

export async function showcaseReviews(req, res, next) {
  try {
    const reviews = await getAllReviews();

    if (!reviews) {
      return next({
        status: 404,
        message: "Reviews not found!",
      });
    }

    const minRandomValue = 0;
    const loops = 20;

    const showcaseReviewsArray = returnUniqueRandomItems(
      minRandomValue,
      reviews,
      loops,
    );

    if (
      !Array.isArray(showcaseReviewsArray) ||
      showcaseReviewsArray.length <= 0
    ) {
      return next({
        status: 404,
        message: "Couldn't get random reviews for showcase!",
      });
    }

    return res.status(200).json(showcaseReviewsArray);
  } catch (error) {
    console.error("Error in showcaseReviews controller: ", error);
    next(error);
  }
}

export async function productReviews(req, res, next) {
  try {
    const productId = req.query.id;

    if (!productId.trim()) {
      return next({
        status: 404,
        message: "Invalid product ID!",
      });
    }

    const productReviews = await getProductReviews(productId);

    if (!productReviews) {
      return next({
        status: 404,
        message: "Product reviews not found!",
      });
    }

    if (!Array.isArray(productReviews) || productReviews.length <= 0) {
      return next({
        status: 404,
        message: "Couldn't get product reviews!",
      });
    }

    return res.status(200).json(productReviews);
  } catch (error) {
    console.error("Error in productReviews controller: ", error);
    next(error);
  }
}
