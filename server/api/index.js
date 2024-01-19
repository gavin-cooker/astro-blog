import {
  queryBlogModel,
  updateBlogModel,
  deleteBlogModel,
  addBlogModel
} from '../db/lib/index.js'
import { ObjectId } from 'mongodb'
// pubDate: dateFromObjectId(item._id)
const addBlog = async (req, res) => {
  console.log('addBlog', req.body)
  const setData = req.body
  delete setData._id
  await addBlogModel(setData)
  return res.status(200)
}
const deleteBlog = async ({ req, res }) => {
  console.log('deleteBlog', req)
  await deleteBlogModel({
    _id: new ObjectId(req.params.id)
  })
  return res.status(200)
}
const updateBlog = async (req, res) => {
  console.log('updateBlog', req.body)
  const setData = req.body
  delete setData._id
  await updateBlogModel(new ObjectId(req.params.id), setData)
  res.setHeader('Content-type', 'application/json')
  return res.status(200)
}
const getBlogs = async (req, res) => {
  let result = await queryBlogModel()
  return res.json(result)
}
const getBlogById = async (req, res) => {
  let result = await queryBlogModel({
    _id: new ObjectId(req.params.id)
  })
  return res.json(result)
}
const api = {
  addBlog,
  deleteBlog,
  updateBlog,
  getBlogById,
  getBlogs
}
export default api
