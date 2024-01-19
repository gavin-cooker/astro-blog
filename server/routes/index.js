import express from 'express'
import api from '../api/index.js'
const router = express.Router()
// API Routes
router.put('/api/blog', api.addBlog)
router.delete('/api/blog', api.deleteBlog)
router.post('/api/blog/:id', api.updateBlog) 
router.get('/api/blog/:id', api.getBlogById)
router.get('/api/blog', api.getBlogs)

export default router