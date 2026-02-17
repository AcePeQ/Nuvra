import { getPromoCode } from "../services/cart.service.js";

export async function promoCode(req, res, next) {
  try {
    const code = req.query.code;

    if (!code.trim()) {
      return next({
        status: 404,
        message: "Invalid code!",
      });
    }

    const promocodeArray = getPromoCode(code);

    if (promocodeArray.length <= 0) {
      return next({
        status: 404,
        message: "Promotion code not found!",
      });
    }

    const promocode = { ...promocodeArray[0] };
    const discount = promocode.discount;

    return res.status(200).json(discount);
  } catch (error) {
    console.error("Error in promoCode controller: ", error);
    next(error);
  }
}
