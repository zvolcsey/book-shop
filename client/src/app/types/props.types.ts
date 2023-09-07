import { TBookWithAuthors } from "@shared/books.types"

export interface IBookListProps {
  books: TBookWithAuthors[]
}

export interface IBookPreviewProps {
  book: TBookWithAuthors
}
