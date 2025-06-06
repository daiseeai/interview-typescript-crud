import { Hono } from "hono";
// import { client } from "../utils/database.js";
// const { rows } = await client.execute("");

// Please see the docs here.
// https://docs.turso.tech/sdk/ts/quickstart

export const products = new Hono();

products.get("/", async (c) => {
  return c.json({ message: "Hello World" });
});