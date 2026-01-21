import { getAllProducts } from "../services/products.service.js";

export async function allProducts(req, res, next) {
  try {
    const products = await getAllProducts();

    if (!products) {
      return next({ status: 404, message: "Could not find products" });
    }
    console.log(products);

    return res.status(200).json({ products });
  } catch (error) {
    console.error("Error in allProducts controller: ", error);
    next(error);
  }
}
