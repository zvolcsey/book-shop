import { Outlet } from "react-router-dom"
import Header from "../components/layout/header"

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
    </>
  )
}
