import "./styles/App.css"
import { Routes, Route } from "react-router-dom"
import Home from "./pages/Home"
import Meal from "./pages/Meal"
import ContextProvider from "./context"
import Layout from "./layout"

const App = () => {
  return (
    <ContextProvider>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="/meal/:id"
                 element={<Meal />}
          />
        </Route>
      </Routes>
    </ContextProvider>
  )
}
export default App
