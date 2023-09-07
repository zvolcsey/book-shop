import { createAsyncThunk, createSlice } from "@reduxjs/toolkit"
import { IBooksListState } from "../../app/types/redux.types"
import { RootState } from "../../app/store"
import { initBooks } from "./booksAPI"
import { IBooksList } from "@shared/books.types"

const initialState: IBooksListState = {
  books: [],
  booksCount: null,
  status: "idle",
}

export const initBooksAsync = createAsyncThunk<IBooksList, undefined, {}>(
  "booksList/initBooks",
  async () => {
    const response = await initBooks()
    return response
  },
)

export const booksListSlice = createSlice({
  name: "booksList",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(initBooksAsync.pending, (state) => {
        state.status = "loading"
      })
      .addCase(initBooksAsync.fulfilled, (state, action) => {
        state.status = "success"
        state.books = action.payload.books
        state.booksCount = action.payload.booksCount
      })
      .addCase(initBooksAsync.rejected, (state) => {
        state.status = "failed"
      })
  },
})

export const selectBooks = (state: RootState) => state.booksList.books
export const selectBooksCount = (state: RootState) => state.booksList.booksCount
export const selectBooksStatus = (state: RootState) => state.booksList.status

export default booksListSlice.reducer
