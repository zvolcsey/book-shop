import { NextFunction, Request, Response } from "express";
import { getBooks } from "../models/booksList.model";
import type { IBooksList } from "@shared/books.types";

export async function getBooksHandler(
  req: Request,
  res: Response<IBooksList>,
  next: NextFunction,
) {
  try {
    const books = await getBooks()
    return res.status(200).json(books)
  } catch (e) {
    console.log(e)
    next(e)
  }
}