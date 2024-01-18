import express from 'express'
import path from 'path'
import routes from './routes/index.js'
import { setupClient } from './db/index.js'
import { handler as ssrHandler } from '../dist/server/entry.mjs'
import { fileURLToPath } from 'url'
const __filename = fileURLToPath(import.meta.url)
const __dirname = path.dirname(__filename)
const ASTRO_BUILD_CLIENT_DIR = path.resolve(__dirname, '../dist/client/')
const PORT = 8080
setupClient()
const app = express()
app.use('/', routes)
app.use(express.static(ASTRO_BUILD_CLIENT_DIR))
app.use((req, res, next) => {
  const locals = {
    title: 'New title'
  }
  ssrHandler(req, res, next, locals)
})
app.listen(PORT, () => {
  console.log(`app is running on PORT [localhost:${PORT}]`)
})
export default app
