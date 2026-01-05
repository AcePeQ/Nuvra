import Pool from "pg";

const USER = process.env.POSTGRES_USER;
const PASSWORD = process.env.POSTGRES_PASSWORD;
const DB_NAME = process.env.POSTGRES_DB;
const HOST = process.env.POSTGRES_HOST;
const PORT = process.env.POSTGRES_PORT;

const pool = new Pool({
  user: USER,
  password: PASSWORD,
  host: HOST,
  port: PORT,
  database: DB_NAME,
});

export default pool;
