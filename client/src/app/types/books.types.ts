export interface IAuthor {
  id: string
  slug: string
  name: string
}

export interface IBook {
  id: string
  slug: string
  cover: string
  title: string
  description: string
  author: IAuthor
  price: number
}

export interface IBookListProps {
  books: IBook[]
}

export interface IBookPreviewProps {
  book: IBook
}
