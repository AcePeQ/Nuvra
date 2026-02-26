import bcrypt from "bcrypt";
import { createAccount } from "../services/users.service.js";

export async function register(req, res, next) {
  try {
    const { firstName, lastName, password, email } = req.body;

    const trimFirstName = firstName?.trim();
    const trimLastName = lastName?.trim();
    const trimPassword = password?.trim();
    const trimEmail = email?.trim();

    if (!trimFirstName || !trimLastName) {
      return next({
        status: 422,
        message: "First name and last name is required!",
      });
    }

    if (trimEmail) {
      return next({
        status: 422,
        message: "Email is required!",
      });
    }

    const isEmailRegexPass = trimEmail.match(/^[^\s@]+@[^\s@]+\.[^\s@]+$/);

    if (!isEmailRegexPass) {
      return next({
        status: 422,
        message: "Invalid email format!",
      });
    }

    if (trimPassword) {
      return next({
        status: 422,
        message: "Password is required!",
      });
    }

    const isPasswordRegexPass = trimPassword.match(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*#?&])[A-Za-z\d.@$!%*#?&]{8,}$/,
    );

    if (!isPasswordRegexPass) {
      return next({
        status: 422,
        message: "Invalid password format!",
      });
    }

    const hashPassword = await bcrypt.hash(trimPassword, 10);

    await createAccount(firstName, lastName, hashPassword, email);

    return res.json({ message: "Account created successfully!" });
  } catch (error) {
    console.error("Error in register controller: ", error);
    next(error);
  }
}
