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
  author: testAuthor,
  onlinePrice: 16.39,
  originalPrice: 19.89,
}

export const testBookList: IBook[] = [
  {
    id: "book-1",
    slug: "tools-of-titans",
    cover: "",
    title: "Tools of Titans",
    author: {
      id: "author-1",
      slug: "tim-ferris",
      name: "Tim Ferris",
    },
    onlinePrice: 16.89,
    originalPrice: 19.89,
  },
  {
    id: "book-2",
    slug: "ego-is-the-enemy",
    cover: "",
    title: "Ego is the Enemy",
    author: {
      id: "author-2",
      slug: "ryan-holiday",
      name: "Ryan Holiday",
    },
    onlinePrice: 15.39,
    originalPrice: 18.39,
  },
]
