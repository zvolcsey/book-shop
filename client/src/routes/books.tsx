import { useEffect } from "react"
import styles from "./books.module.css"
import BooksList from "../components/books/books-list"
import {
  initBooksAsync,
  selectBooks,
  selectBooksStatus,
} from "../features/books/booksSlice"
import { useAppDispatch, useAppSelector } from "../app/hooks"

export default function Books() {
  const dispatch = useAppDispatch()

  const books = useAppSelector(selectBooks)
  const booksFetchStatus = useAppSelector(selectBooksStatus)

  useEffect(() => {
    dispatch(initBooksAsync())
  }, [dispatch])

  return (
    <>
      {booksFetchStatus === "loading" && (
        <p className={styles.message}>Loading...</p>
      )}
      {booksFetchStatus === "success" && books.length > 0 && (
        <BooksList books={books} />
      )}
      {booksFetchStatus === "success" && books.length === 0 && (
        <p className={styles.message}>There are no available books</p>
      )}
      {booksFetchStatus === "failed" && (
        <p className={`${styles.message} ${styles.error}`}>
          Failed to load the books from the database!
        </p>
      )}
    </>
  )
}
