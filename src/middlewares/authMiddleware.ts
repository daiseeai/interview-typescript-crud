import { createMiddleware } from "hono/factory";

export const authMiddleware = createMiddleware(async (c, next) => {
  const authorization = c.req.header("Authorization")
  if (authorization === undefined || authorization === null) {
    return c.json({ message: "Unauthorized" }, 401);
  }
  await next();
});
