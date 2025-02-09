import { createContext, useState } from "react"
import { useNavigate } from "react-router-dom"
export const AppContext =createContext()

const ContextProvider = (props) => {
  const [mealName, setMealName] = useState("") 
  const [mealData, setMealData] = useState({
    id: "", 
    name: "", 
    instructions: "", 
    img: "", 
    source: "", 
    area: "", 
    category: "", 
  })
  const navigate = useNavigate()
  

  const getMealData = async(e) => {
    e.preventDefault()
    const response = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${mealName}`)
    const jsonData = await response.json()
    setMealData({
      id: jsonData.meals[0].idMeal, 
      name: jsonData.meals[0].strMeal,
      instructions: jsonData.meals[0].strInstructions,
      img: jsonData.meals[0].strMealThumb,
      source: jsonData.meals[0].strYoutube,
      area: jsonData.meals[0].strArea,
      category: jsonData.meals[0].strCategory
    })

    navigate(`/meal/${jsonData.meals[0].idMeal}`)
  }
const contextValues = {
    mealName: mealName, 
    mealData: mealData, 
    setMealName: setMealName, 
    getMealData: getMealData, 
  }

  return (
    <AppContext.Provider value={contextValues}>
      {props.children}
    </AppContext.Provider>
  )
}

export default ContextProvider
