import type { IAuthor, IBook } from "../../app/types/books.types"

export const testAuthor: IAuthor = {
  id: "test-author-1",
  slug: "john-doe",
  name: "John Doe",
}

export const testBookWithoutCover: IBook = {
  id: "test-book-1",
  slug: "test-book-title",
  cover: "",
  title: "Test Book Title",
  description: "It is the description.",
  author: testAuthor,
  price: 16.39,
}

export const testBookList: IBook[] = [
  {
    id: "book-1",
    slug: "tools-of-titans",
    cover: "",
    title: "Tools of Titans",
    description: "It is the description.",
    author: {
      id: "author-1",
      slug: "tim-ferris",
      name: "Tim Ferris",
    },
    price: 16.89,
  },
  {
    id: "book-2",
    slug: "ego-is-the-enemy",
    cover: "",
    title: "Ego is the Enemy",
    description: "It is the description.",
    author: {
      id: "author-2",
      slug: "ryan-holiday",
      name: "Ryan Holiday",
    },
    price: 15.39,
  },
]
