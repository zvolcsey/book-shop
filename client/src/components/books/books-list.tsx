import type { IBookListProps } from "../../app/types/books.types"
import BookPreview from "./book-preview"
import styles from "./books-list.module.css"

export default function BooksList({ books }: IBookListProps) {
  return (
    <ul className={styles["cards-list"]}>
      {books.map((book) => (
        <li key={book.id}>
          <BookPreview book={book} />
        </li>
      ))}
    </ul>
  )
}
