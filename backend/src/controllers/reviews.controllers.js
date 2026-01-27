import { getAllReviews } from "../services/reviews.routes";

export async function showcaseReviews(req, res, next) {
  try {
    const reviews = await getAllReviews();

    if (!reviews) {
      return next({
        status: 404,
        message: "Reviews not found!",
      });
    }

    return res.status(200).json({});
  } catch (error) {
    console.error("Error in showcaseReviews controller: ", error);
    next(error);
  }
}
