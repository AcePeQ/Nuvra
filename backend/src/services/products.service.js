import pool from "../db/db.js";

export async function getAllProducts() {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
}

export async function getNewArrivalProducts() {
  const result = await pool.query(
    "SELECT * FROM products WHERE is_new_arrival=true ",
  );
  return result.rows;
}

export async function getTopSaleProducts() {
  const result = await pool.query(
    "SELECT * FROM products WHERE is_featured=true",
  );
  return result.rows;
}

export async function getOnSaleProducts() {
  const result = await pool.query(
    "SELECT * FROM products WHERE discount_perecent > 0",
  );
  return result.rows;
}
