import {
  getAllProducts,
  getNewArrivalProducts,
  getOnSaleProducts,
  getSingleProduct,
  getTopSaleProducts,
} from "../services/products.service.js";
import { formatProductName } from "../utils/helpers.js";

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
        message: "Products not found!",
      });
    }

    return res.status(200).json({
      onSaleProducts: onSale,
      newArrivalsProducts: newArrivals,
      topSaleProducts: topSales,
    });
  } catch (error) {
    console.error("Error in allShowcaseProducts controller: ", error);
    next(error);
  }
}

export async function product(req, res, next) {
  try {
    const name = req.query.name;

    if (!name.trim()) {
      return next({
        status: 404,
        message: "Invalid product name!",
      });
    }

    const formatedName = formatProductName(name);

    const product = await getSingleProduct(formatedName);

    if (!product) {
      return next({
        status: 404,
        message: "Product not found!",
      });
    }

    return res.status(200).json(product);
  } catch (error) {
    console.error("Error in product controller: ", error);
    next(error);
  }
}
