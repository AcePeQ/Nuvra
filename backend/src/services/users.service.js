import pool from "../db/db.js";

export async function createAccount(firstName, lastName, passwordHash, email) {
  const result = await pool.query(
    `INSERT INTO users (email, password_hash, first_name, last_name) 
    VALUES ($1, $2, $3, $4) 
    ON CONFLICT (email) DO NOTHING
    RETURNING id
    `,
    [email, passwordHash, firstName, lastName],
  );

  if (result.rowCount === 0) {
    const error = new Error("Email already exists!");
    error.status = 409;
    throw error;
  }
}
