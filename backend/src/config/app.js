import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "../middlewares/error.middleware.js";

import routerProducts from "../routes/products.routes.js";
import routerReviews from "../routes/reviews.routes.js";

export const app = express();

const APP_URL = process.env.FRONTEND_APP_URL;
const STATIC_ROOT = process.env.STATIC_ROOT;

const corsOptions = {
  origin: APP_URL,
  credentials: true,
};

app.use(express.static(STATIC_ROOT));

console.log(process.cwd());

app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());

app.use("/api", routerProducts);
app.use("/api", routerReviews);

app.use(errorHandler);
