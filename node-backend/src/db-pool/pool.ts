import { Pool } from "pg";

export const pool: Pool = new Pool({
    host: "localhost",
    port: 5432,
    database: "pto_tracker",
    user: "root",
    password: "root",
})