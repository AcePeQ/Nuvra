import pool from "../db/db.js";

export async function getAllProducts() {
  const result = await pool.query("SELECT * FROM products");
  return result.rows;
}

export async function getNewArrivalProducts() {
  const result = await pool.query(
    "SELECT * FROM products WHERE is_new_arrival=$1",
    [true],
  );
  return result.rows;
}

export async function getTopSaleProducts() {
  const result = await pool.query(
    "SELECT * FROM products WHERE is_featured=$1",
    [true],
  );
  return result.rows;
}

export async function getOnSaleProducts() {
  const result = await pool.query(
    "SELECT * FROM products WHERE discount_percent > $1",
    [0],
  );
  return result.rows;
}

export async function getSingleProduct(name) {
  const result = await pool.query(`SELECT * FROM products WHERE name=$1`, [
    name,
  ]);
  return result.rows;
}
