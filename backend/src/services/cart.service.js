import pool from "../db/db.js";

export async function getPromoCode(code) {
  const result = await pool.query("SELECT * FROM promo_codes WHERE code=$1", [
    code,
  ]);
  return result.rows;
}
