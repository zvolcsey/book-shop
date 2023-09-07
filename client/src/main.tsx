import React from "react"
import ReactDOM from "react-dom/client"
import { Provider } from "react-redux"
import { setupStore } from "./app/store"
import "./index.css"
import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Root from "./routes/root"
import Index from "./routes"
import Books from "./routes/books"
import Book from "./routes/book"
import Cart from "./routes/cart"
import Author from "./routes/author"
import { ChakraProvider } from "@chakra-ui/react"
import SignIn from "./routes/sign-in"

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Index /> },
      { path: "/books", element: <Books /> },
      { path: "/book/:slugAndId", element: <Book /> },
      { path: "/author/:slugAndId", element: <Author /> },
      { path: "/cart", element: <Cart /> },
      { path: "/sign-in", element: <SignIn /> },
    ],
  },
])

const store = setupStore()

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider>
      <Provider store={store}>
        <RouterProvider router={router} />
      </Provider>
    </ChakraProvider>
  </React.StrictMode>,
)
