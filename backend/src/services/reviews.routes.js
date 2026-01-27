import pool from "../db/db.js";

export async function getAllReviews() {
  const result = await pool.query("SELECT * FROM product_reviews");
  return result.rows;
}
