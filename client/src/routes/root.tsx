import { Outlet } from "react-router-dom"
import Header from "../components/layout/header"
import MobileNavbar from "../components/mobile-navbar/mobile-navbar"

export default function Root() {
  return (
    <>
      <Header />
      <main>
        <Outlet />
      </main>
      {/* Footer */}
      <MobileNavbar />
    </>
  )
}
