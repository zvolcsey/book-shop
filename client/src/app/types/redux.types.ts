import type { RenderOptions } from "@testing-library/react"
import type { RootState } from "../store"
import type { PreloadedState } from "@reduxjs/toolkit"
import type { ToolkitStore } from "@reduxjs/toolkit/dist/configureStore"
import type { TBookWithAuthors } from "@shared/books.types"

export type Status = "idle" | "loading" | "success" | "failed"

// Source: https://redux.js.org/usage/writing-tests#setting-up-a-reusable-test-render-function
export interface ExtendedRenderOptions extends Omit<RenderOptions, "queries"> {
  preloadedState?: PreloadedState<RootState>
  store?: ToolkitStore
}

// Initial State intefaces
export interface IBooksListState {
  readonly books: TBookWithAuthors[]
  readonly booksCount: Number | null
  readonly status: Status
}
