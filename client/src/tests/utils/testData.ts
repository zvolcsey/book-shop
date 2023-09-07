import type {
  IAuthorName,
  IBooksList,
  TBookWithAuthors,
} from "@shared/books.types"

export const john: IAuthorName = {
  id: "test-author-1",
  slug: "john-doe",
  firstName: "John",
  lastName: "Doe",
}

export const jane: IAuthorName = {
  id: "test-author-2",
  slug: "jane-doe",
  firstName: "Jane",
  lastName: "Doe",
}

export const testBook1: TBookWithAuthors = {
  id: "test-book-1",
  slug: "test-book-title",
  createdAt: new Date("2023-07-08"),
  updateAt: new Date("2023-08-23"),
  coverImg: "",
  title: "Test Book 1",
  description: "It is the description of the test book 1.",
  authors: [{ author: john }, { author: jane }],
  price: 16.39,
  publishedYear: 2016,
}

export const testBook2: TBookWithAuthors = {
  id: "test-book-2",
  slug: "test-book-title",
  createdAt: new Date("2023-06-28"),
  updateAt: new Date("2023-07-24"),
  coverImg: "",
  title: "Test Book Title",
  description: "It is the description of the test book 2.",
  authors: [{ author: jane }],
  price: 15.39,
  publishedYear: 2018,
}

export const testBookList: TBookWithAuthors[] = [testBook1, testBook2]

export const testBookListfromDB: IBooksList = {
  books: testBookList,
  booksCount: testBookList.length,
}
