import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import errorHandler from "../middlewares/error.middleware.js";
import path from "path";

import routerProducts from "../routes/products.routes.js";

export const app = express();

const APP_URL = process.env.FRONTEND_APP_URL;

const corsOptions = {
  origin: APP_URL,
  credentials: true,
};

app.use(express.static(path.resolve(process.cwd(), "/config/public")));
app.use(express.json());
app.use(cors(corsOptions));
app.use(cookieParser());
app.use("/api", routerProducts);

app.use(errorHandler);
