import express from 'express'
import { getApi } from '../controllers/index.controller'

const apiRoute = express.Router()

// desc     Get the welcome message
// route    GET /api
apiRoute.get('/api', getApi)

export default apiRoute