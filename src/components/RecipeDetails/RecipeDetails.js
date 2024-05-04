function RecipeDetails({ recipe }) {
  return (
    <>
      <h2>{recipe.label}</h2>
      <div>
        <img src={recipe.image} />
      </div>
      <div>
        <h3>Ingredients</h3>
        <div>
          {recipe.ingredients.map((ingredient) => (
            <div key={ingredient.foodId}>
              <div>{ingredient.food}</div>
              <div>{ingredient.measure}</div>
              <div>{ingredient.quantity}</div>
            </div>
          ))}
        </div>
      </div>
      <div>
        <div>{recipe.calories}</div>
        <div>{recipe.healthLabels}</div>
        <div>{recipe.cuisineType}</div>
        <div>{recipe.mealType}</div>
      </div>
    </>
  );
}

export default RecipeDetails;
