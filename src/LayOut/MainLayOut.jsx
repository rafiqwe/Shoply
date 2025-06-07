import { Outlet } from "react-router-dom"
import Header from "./Header"
import Footer from "./footer"

const MainLayOut = () => {
  return (
    <div>
      <Header />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}

export default MainLayOut
