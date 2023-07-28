import type { IBook } from "../app/types/books.types"
import BooksList from "../components/books/books-list"

// Examples books
const books: IBook[] = [
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

export default function Books() {
  return (
    <>
      {books.length > 0 ? (
        <BooksList books={books} />
      ) : (
        "There are no available books"
      )}
    </>
  )
}
