import express from 'express'
import dotenv from 'dotenv'
import { setHeader } from './middlewares/middleware'
import booksListRoutes from './routes/api/booksList.router'
import apiRoute from './routes/index.router'

const app = express()

dotenv.config()

app.use(express.json())

app.use(setHeader)

app.use('/', apiRoute)
app.use('/api/books', booksListRoutes)

export default app
