import { DuckDBInstance } from "@duckdb/node-api";

const instance = await DuckDBInstance.create(process.env.DATABASE_URL);
export const connection = await instance.connect();
