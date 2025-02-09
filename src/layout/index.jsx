import Header from "../components/Header"
import Form from "../components/Form"
import { Outlet } from "react-router-dom"

const Layout = () => {
  return (
    <div className="mode-body">
      <div className="container">
        <Header />
        <Form />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
