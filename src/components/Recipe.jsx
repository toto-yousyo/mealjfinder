import PropTypes from 'prop-types'
import { useContext } from "react"
import { AppContext } from "../context"

const Recipe = () => {
  const contextValues = useContext(AppContext)

  return (
    <>
    {contextValues.mealData.img &&
    <div className="recipe">
      <h2>{contextValues.mealData.name}</h2>
      <p>Area<span>{contextValues.mealData.area}</span></p>
      <p>Category<span>{contextValues.mealData.category}</span></p>
      <img src={contextValues.mealData.img} alt="meal-image"/>
      <p>{contextValues.mealData.instructions}</p>
      <p>
        source
          <span>
            <a href={contextValues.mealData.source}>
              {contextValues.mealData.source}
            </a>
          </span>
      </p>
    </div>
  }
  </>
  )
}
Recipe.propTypes = {
  mealData: PropTypes.shape({
    img: PropTypes.string,
    name: PropTypes.string,
    area: PropTypes.string,
    category: PropTypes.string,
    instructions: PropTypes.string,
    source: PropTypes.string,
  }).isRequired,
};


export default Recipe
