import {
  getAllProducts,
  getNewArrivalProducts,
  getOnSaleProducts,
  getTopSaleProducts,
} from "../services/products.service.js";

export async function allProducts(req, res, next) {
  try {
    const products = await getAllProducts();

    if (!products) {
      return next({ status: 404, message: "Products not found" });
    }

    return res.status(200).json({ products });
  } catch (error) {
    console.error("Error in allProducts controller: ", error);
    next(error);
  }
}

export async function allShowcaseProducts(req, res, next) {
  try {
    const newArrivals = await getNewArrivalProducts();
    const onSale = await getOnSaleProducts();
    const topSales = await getTopSaleProducts();

    if (!newArrivals || !onSale || !topSales) {
      return next({
        status: 404,
        message: "Products not found",
      });
    }

    return res
      .status(200)
      .json({
        onSaleProducts: onSale,
        newArrivalsProducts: newArrivals,
        topSaleProducts: topSales,
      });
  } catch (error) {
    console.error("Error in allShowcaseProducts controller: ", error);
    next(error);
  }
}
