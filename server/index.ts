import express from 'express'
import path from 'path'
import routes from './routes/routes'
const ROOT_DIR = path.resolve(__dirname, '../')
const ASTRO_BUILD_CLIENT_DIR = path.resolve(ROOT_DIR, './dist/client/')
const PORT = 8080

const app = express()
app.use('/', routes)
app.use(express.static(ASTRO_BUILD_CLIENT_DIR))
app.listen(PORT, () => {
  console.log(`app is running on PORT [localhost:${PORT}]`)
})
export default app


/**
 * 
 * import express from 'express';
import { handler as ssrHandler } from './dist/server/entry.mjs';

const app = express();
app.use(express.static('dist/client/'));
// app.use((req, res, next) => {
//   const locals = {
//     title: 'New title',
//   };

//   ssrHandler(req, res, next, locals);
// });

app.listen(8080);
console.log('server start... port is [http://localhost:8080/]')
 */