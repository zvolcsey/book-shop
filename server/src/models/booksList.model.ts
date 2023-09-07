import type { IBooksList, IAuthor } from "@shared/books.types";
import { db } from "../utils/db.server"

export async function getBooks(): Promise<IBooksList> {
  const books = await db.book.findMany({
    orderBy: {
      createdAt: 'desc',
    },
    select: {
      id: true,
      createdAt: true,
      updateAt: true,
      slug: true,
      title: true,
      description: true,
      coverImg: true,
      price: true,
      publishedYear: true,
      authors: {
        select: {
          author: {
            select: {
              id: true,
              slug: true,
              firstName: true,
              lastName: true,
            }
          }
        }
      }
    }
  })
  const booksCount = await db.book.count();

  return { books, booksCount }
}