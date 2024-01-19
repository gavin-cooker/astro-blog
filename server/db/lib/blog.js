import { getClient } from '../index.js'
import { COLLECTION_NAME } from '../../config/index.js'

const addBlogModel = async blog => {
  const db = await getClient()
  const collection = db.collection(COLLECTION_NAME)
  const result = await collection.insertOne(blog)
  console.log(`A document was inserted with the _id: ${result.insertedId}`)
}
const queryBlogModel = async (query = {}) => {
  const db = await getClient()
  const collection = db.collection(COLLECTION_NAME)
  let cursor = collection.find(query)
  const result = await cursor.toArray()
  return result
}
const deleteBlogModel = async id => {
  if (!id) {
    throw new Error('delete action need id', id)
  }
  const db = await getClient()
  const collection = db.collection(COLLECTION_NAME)
  collection.deleteOne({
    _id: id
  })
}
const updateBlogModel = async (id, setData) => {
  if (!id) {
    throw new Error('delete action need id', id)
  }
  const db = await getClient()
  const collection = db.collection(COLLECTION_NAME)
  await collection.updateOne(
    {
      _id: id
    },
    { $set: setData }
  )
}
export { addBlogModel, deleteBlogModel, updateBlogModel, queryBlogModel }
