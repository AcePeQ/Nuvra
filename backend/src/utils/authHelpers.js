import jwt from "jsonwebtoken";

export function createToken(userId) {
  try {
    const SECRET_JWT_KEY = process.env.SECRET_JWT_KEY;

    if (!SECRET_JWT_KEY) {
      const error = new Error("Something went wrong during creating a token!");
      error.status = 500;
      throw error;
    }

    const token = jwt.sign({ id: userId }, SECRET_JWT_KEY, {
      expiresIn: "7d",
    });

    return token;
  } catch (error) {
    console.error("Error during creating a token: ", error);
    throw error;
  }
}

export function setCookie(token, res) {
  try {
    const SEVEN_DAYS_IN_MILITSECONDS = 7 * 24 * 60 * 60 * 1000;

    res.cookie("token", token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: SEVEN_DAYS_IN_MILITSECONDS,
      path: "/",
    });
  } catch (error) {
    console.error("Error during setting a cookie: ", error);
    throw error;
  }
}

export function clearCookie(res) {
  try {
    res.clearCookie("token", {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: process.env.NODE_ENV === "production" ? "none" : "strict",
      maxAge: SEVEN_DAYS_IN_MILITSECONDS,
      path: "/",
    });
  } catch (error) {
    console.error("Error during removing the cookie: ", error);
    throw error;
  }
}
