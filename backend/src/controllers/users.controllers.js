import bcrypt from "bcrypt";
import { createAccount } from "../services/users.service.js";

export async function register(req, res, next) {
  try {
    const { firstName, lastName, password, email } = req.body;

    const normalizedFirstName = firstName?.trim();
    const normalizedLastName = lastName?.trim();
    const normalizedPassword = password?.trim();
    const normalizedEmail = email?.trim().toLowerCase();

    if (!normalizedFirstName || !normalizedLastName) {
      return next({
        status: 422,
        message: "First name and last name is required!",
      });
    }

    if (!normalizedEmail) {
      return next({
        status: 422,
        message: "Email is required!",
      });
    }

    const isEmailRegexPass = normalizedEmail.match(
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
    );

    if (!isEmailRegexPass) {
      return next({
        status: 422,
        message: "Invalid email format!",
      });
    }

    if (!normalizedPassword) {
      return next({
        status: 422,
        message: "Password is required!",
      });
    }

    const isPasswordRegexPass = normalizedPassword.match(
      /^(?=.*[A-Z])(?=.*\d)(?=.*[.@$!%*#?&])[A-Za-z\d.@$!%*#?&]{8,}$/,
    );

    if (!isPasswordRegexPass) {
      return next({
        status: 422,
        message: "Invalid password format!",
      });
    }

    const hashPassword = await bcrypt.hash(normalizedPassword, 10);

    try {
      await createAccount(
        normalizedFirstName,
        normalizedLastName,
        hashPassword,
        normalizedEmail,
      );
    } catch (error) {
      if (error.status === 409) {
        return next({
          status: 409,
          message: "Account with this email already exists!",
        });
      }
      return next({
        status: 500,
        message: "Something went wrong with creating an account!",
      });
    }

    return res.status(201).json({ message: "Account created successfully!" });
  } catch (error) {
    console.error("Error in register controller: ", error);
    next(error);
  }
}
