import { getBlogModel } from "../db/lib/index.js"

const addBlog = async (req, res) => {
  console.log('addBlog', req)
}
const deleteBlog = async (req, res) => {
  console.log('deleteBlog')
}
const updateBlog = async (req, res) => {
  console.log('updateBlog')
//   try {
//     res.setHeader('Content-type', 'application/json')
//     res.json(JSON.stringify({ test: 'max' }))
//   } catch (error) {
//     res.json({ error, message: `Unable to fetch data on ${req.route.path}` })
//   }
}
const getBlog = async (req, res) => {
  console.log('getBlog')
  let result = await getBlogModel()
  console.log('get Blog result:', result);
  return res.json(result)
}
const api = {
  addBlog,
  deleteBlog,
  updateBlog,
  getBlog
}
export default api
