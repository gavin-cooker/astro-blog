import { MongoClient } from 'mongodb'
import { DB_NAME, DB_URL } from '../config/index.js'
let client = new MongoClient(DB_URL)
let blogDb = null;
const setupClient = async () => {
  try {
    await client.connect()
    blogDb = client.db(DB_NAME)
  } catch (error) {
    client.close()
    blogDb = null;
  }
}
const getClient = async () => {
    if (blogDb === null) {
        await setupClient()
    }
    return blogDb
}

export { getClient, setupClient }
