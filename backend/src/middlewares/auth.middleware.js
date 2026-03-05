import jwt from "jsonwebtoken";
import { findUserById } from "../services/users.service";

export async function verifyToken(req, res, next) {
  try {
    const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY;
    const token = req.cookies.token;

    if (!SECRET_JWT_KEY || !token) {
      throw new Error("Unauthorized access!");
    }

    const decodedToken = jwt.verify(token, SECRET_JWT_KEY);
    const userId = decodedToken.id;

    if (!decodedToken || !userId) {
      throw new Error("Unauthorized access!");
    }

    const user = (await findUserById(userId))[0];

    if (!user) {
      throw new Error("Invalid token!");
    }

    req.authUser = user;

    next();
  } catch (error) {
    console.error(
      "Erorr during verifing token in verifyToken middleware: ",
      error,
    );
    throw new Error("Internal server error");
  }
}
