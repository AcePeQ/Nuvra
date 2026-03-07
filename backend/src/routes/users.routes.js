import express from "express";
import {
  checkSession,
  login,
  register,
} from "../controllers/users.controllers.js";
import { verifyToken } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.get("/auth/session", verifyToken, checkSession);

export default router;
