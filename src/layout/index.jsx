import { useState, useEffect } from "react"
import Header from "../components/Header"
import Form from "../components/Form"
import { Outlet } from "react-router-dom"
import { useDarkMode } from "../hooks/useDarkMode"

const Layout = () => {
  const [theme, handleThemeSwitch] = useDarkMode()
  return (
    <div className="mode-body" 
      data-theme={theme === "light" ? "light" : "dark"}>
      <div className="container">
        <Header />
        <button onClick={handleThemeSwitch}>
          mode
        </button>
        <Form />
        <Outlet />
      </div>
    </div>
  )
}

export default Layout
