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

    const randomReviews = returnUniqueRandomItems(
      minRandomValue,
      reviews,
      loops,
    );

    if (!Array.isArray(randomReviews) || randomReviews.length <= 0) {
      return next({
        status: 404,
        message: "Couldn't get random reviews for showcase!",
      });
    }

    return res.status(200).json({ showcaseReviews: randomReviews });
  } catch (error) {
    console.error("Error in showcaseReviews controller: ", error);
    next(error);
  }
}
