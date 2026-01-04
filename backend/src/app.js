import express from "express";
import cors from "cors";
export const app = express();

const corsOptions = {
  origin: process.env.ENVIRONMENT,
  credentials: true,
};

app.use(cors(corsOptions));

app.use(express.static("../public"));

app.use(express.json());
