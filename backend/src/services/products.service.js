import pool from "../db/db.js";

export function getAllProducts() {
  return pool.query("SELECT * from products");
}
