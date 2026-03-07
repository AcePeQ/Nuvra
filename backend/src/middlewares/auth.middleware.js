import jwt from "jsonwebtoken";
import { findUserById } from "../services/users.service.js";
import { clearCookie } from "../utils/authHelpers.js";

export async function verifyToken(req, res, next) {
  try {
    const secret = process.env.SECRET_JWT_KEY;
    const token = req.cookies.token;

    console.log(secret);

    if (!secret) {
      return res.status(500).json({
        message: "Server configuration error",
      });
    }

    if (!token) {
      return res.status(401).json({
        isAuthenticated: false,
        user: null,
        message: "No token provided",
      });
    }

    const decodedToken = jwt.verify(token, secret);
    const userId = decodedToken?.id;

    if (!userId) {
      clearCookie(res);
      return res.status(401).json({
        isAuthenticated: false,
        user: null,
        message: "Invalid token",
      });
    }

    const user = (await findUserById(userId))[0];

    if (!user) {
      clearCookie(res);
      return res.status(401).json({
        isAuthenticated: false,
        user: null,
        message: "User not found",
      });
    }

    req.authUser = user;
    return next();
  } catch (error) {
    console.error("Error during token verification:", error);

    clearCookie(res);

    return res.status(401).json({
      isAuthenticated: false,
      user: null,
      message: "Invalid or expired token",
    });
  }
}
