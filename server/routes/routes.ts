import express from 'express'
import {
    minimumSecure,
    latestReleases
} from '../controllers/appController'
const router = express.Router()
// API Routes
router.get('/api/minimum-secure', minimumSecure)
router.get('/api/latest-releases', latestReleases)

// module.exports = router
export default router