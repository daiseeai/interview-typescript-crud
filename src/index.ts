import { serve } from '@hono/node-server'
import { Hono } from 'hono'
import { authMiddleware } from './middlewares/authMiddleware.js'
import { products } from './routes/products.js';

const app = new Hono()

app.use(authMiddleware);

app.get("/health", async (c) => {
  return c.json({ status: "OK" })
})

app.route("/products", products)

serve({
  fetch: app.fetch,
  port: 3000
}, (info) => {
  console.log(`Server is running on http://localhost:${info.port}`)
})