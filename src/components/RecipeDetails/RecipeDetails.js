import "./RecipeDetails.scss";
import pluralize from "pluralize";

function RecipeDetails({ recipe }) {
  return (
    <div className="recipedetails">
      <h2 className="recipedetails__name">{recipe.label}</h2>
      <img className="recipedetails__image" src={recipe.image} />
      <div className="recipedetails__ingredients">
        <h3 className="recipedetails__subtitle">Ingredients</h3>
        <div className="recipedetails__ingredients-list">
          {recipe.ingredients.map((ingredient) => (
            <div
              key={ingredient.foodId}
              className="recipedetails__ingredients-item"
            >
              <div>{ingredient.text}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <h3 className="recipedetails__subtitle">Calories</h3>
        <div>
          {recipe.calories} ({recipe.yield} {pluralize("serving", recipe.yield)}
          )
        </div>
        <h3 className="recipedetails__subtitle">Health labels</h3>
        <div className="recipedetails__labels">
          {recipe.healthLabels.map((label) => (
            <span className="recipedetails__labels-label" key={label}>
              {label}
            </span>
          ))}
        </div>
        <h3 className="recipedetails__subtitle">Cuisine type</h3>
        <div>{recipe.cuisineType}</div>
        <h3 className="recipedetails__subtitle">Meal</h3>
        <div>{recipe.mealType}</div>
      </div>
    </div>
  );
}

export default RecipeDetails;
