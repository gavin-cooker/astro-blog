import { getClient } from "../index.js"
import { COLLECTION_NAME } from "../../config/index.js"

const addBlogModel = async (blog) => {
    const db = await getClient()
    const collection = db.collection(COLLECTION_NAME)
    const result = await collection.insertOne(blog)
    console.log(
        `A document was inserted with the _id: ${result.insertedId}`,
     );
}
const queryBlogModel = async (query = {}) => {
    const db = await getClient()
    const collection = db.collection(COLLECTION_NAME)
    let cursor = collection.find(query)
    const result = await cursor.toArray()
    return result;
}
export {
    addBlogModel,
    queryBlogModel
}