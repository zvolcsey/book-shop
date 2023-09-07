import express from 'express'
import { getBooksHandler } from '../../controllers/booksList.controller';

const booksListRoutes = express.Router();

// desc     List Books
// route    GET /api/books
booksListRoutes.get('/', getBooksHandler)

export default booksListRoutes