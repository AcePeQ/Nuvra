import { getAllReviews } from "../services/reviews.routes.js";
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
