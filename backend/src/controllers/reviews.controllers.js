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
    const page = req.query.page;
    const pageSize = req.query.pageSize;

    if (!productId.trim()) {
      return next({
        status: 404,
        message: "Invalid product ID!",
      });
    }

    const allProductReviews = await getProductReviews(productId);

    if (!allProductReviews) {
      return next({
        status: 404,
        message: "Product reviews not found!",
      });
    }

    if (!Array.isArray(allProductReviews) || allProductReviews.length <= 0) {
      return next({
        status: 404,
        message: "Couldn't get product reviews!",
      });
    }

    const productReviews = allProductReviews.slice(
      (page - 1) * pageSize,
      pageSize * page,
    );

    const totalPages = Math.ceil(allProductReviews.length / pageSize);

    return res.status(200).json({
      reviews: productReviews,
      totalReviews: allProductReviews.length,
      totalPages: totalPages,
    });
  } catch (error) {
    console.error("Error in productReviews controller: ", error);
    next(error);
  }
}
