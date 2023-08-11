import type { IBook } from "../app/types/books.types"
import BooksList from "../components/books/books-list"

// Examples books
const books: IBook[] = [
  {
    id: "book-1",
    slug: "tools-of-titans",
    cover: "",
    title: "Tools of Titans",
    description: `It is a long example the description. What is the book about? The user can read about the book.
      It is a long example the description. What is the book about? The user can read about the book.`,
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
