import { Outlet } from "react-router-dom"

export default function Root() {
  return (
    <>
      {/* Header */}
      <ul>
        <li>
          <a href="/">Index</a>
        </li>
        <li>
          <a href="/books">Books</a>
        </li>
      </ul>
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  )
}
