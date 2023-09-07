import { Book } from "@prisma/client"

export * from "@prisma/client"

export interface IAuthorName {
  id: string,
  slug: string,
  firstName: string,
  lastName: string,
}

export interface IAuthor {
  author: IAuthorName
}

export interface IAuthors {
  authors: IAuthor[]
}

export type TBookWithAuthors = (Book & IAuthors)

export interface IBooksList {
  books: TBookWithAuthors[],
  booksCount: number,
}