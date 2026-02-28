import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "../middlewares/error.middleware.js";

import routerProducts from "../routes/products.routes.js";
import routerReviews from "../routes/reviews.routes.js";
import routerCart from "../routes/cart.routes.js";
import routerUsers from "../routes/users.routes.js";

export const app = express();

const APP_URL = process.env.FRONTEND_APP_URL;
const STATIC_ROOT = process.env.STATIC_ROOT;
const ROUTER_URL = process.env.ROUTER_URL;

const corsOptions = {
  origin: APP_URL,
  credentials: true,
};

app.use(express.static(STATIC_ROOT));

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use(ROUTER_URL, routerProducts);
app.use(ROUTER_URL, routerReviews);
app.use(ROUTER_URL, routerCart);
app.use(ROUTER_URL, routerUsers);

app.use(errorHandler);
