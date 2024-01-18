import { queryBlogModel } from "../db/lib/index.js"

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
const getBlogs = async (req, res) => {
  console.log('getBlog', req.params.title);
  let result = await queryBlogModel()
  console.log('get Blog result:', result);
  return res.json(result)
}
const getBlogByTitle = async (req, res) => {
  console.log('getBlogByTitle', req.params.title);
  let result = await queryBlogModel({
    title: req.params.title
  })
  console.log('get Blog by query result:', result);
  return res.json(result)
}
const api = {
  addBlog,
  deleteBlog,
  updateBlog,
  getBlogByTitle,
  getBlogs
}
export default api
