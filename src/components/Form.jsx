import { useContext } from "react"
import { AppContext } from "../context"
const Form = (props) => {
  const contextValues = useContext(AppContext)
    return (
      <form onSubmit={contextValues.getMealData}>
        <input onChange={(e) => contextValues.setMealName(e.target.value)}
            type="text"
            name="mealName"
            placeholder="input meal name in English" />
        <button>Search</button>
      </form>
    )
}
export default Form

