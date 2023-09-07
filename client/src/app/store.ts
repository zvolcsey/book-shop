import {
  configureStore,
  ThunkAction,
  Action,
  type PreloadedState,
  combineReducers,
} from "@reduxjs/toolkit"
import { booksListSlice } from "../features/books/booksSlice"

// Source: https://redux.js.org/usage/writing-tests

export const rootReducer = combineReducers({
  booksList: booksListSlice.reducer,
})

export const setupStore = (preloadedState?: PreloadedState<RootState>) => {
  return configureStore({
    reducer: rootReducer,
    preloadedState,
  })
}

export type RootState = ReturnType<typeof rootReducer>
export type AppStore = ReturnType<typeof setupStore>
export type AppDispatch = AppStore["dispatch"]
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>
