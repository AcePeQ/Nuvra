import pool from "../db/db.js";

export async function getAllReviews() {
  const result = await pool.query("SELECT * FROM product_reviews");
  return result.rows;
}

export async function getProductReviews(productId) {
  const result = await pool.query(
    "SELECT * from product_reviews WHERE product_id=$1",
    [productId],
  );
  return result.rows;
}
