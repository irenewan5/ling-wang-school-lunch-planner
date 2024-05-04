import { useNavigate, useParams, useSearchParams } from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import { useEffect, useState } from "react";
import api from "../../libs/api";

function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [recipe, setRecipe] = useState();
  const loadRecipe = async function () {
    const result = await api.getRecipeDetails(id);
    setRecipe(result);
  };

  useEffect(() => {
    loadRecipe();
  }, []);

  const onAdd = async () => {
    const kidId = searchParams.get("kidId");
    const date = searchParams.get("date");
    if (kidId && date && recipe) {
      await api.addPlan(date, kidId, recipe);
      navigate(`/plans?date=${date}&kidId=${kidId}`);
    }
  };
  return (
    <>
      {recipe && (
        <>
          <RecipeDetails recipe={recipe} />
          <div>
            <button onClick={onAdd}>Add to plan</button>
          </div>
        </>
      )}
    </>
  );
}

export default RecipePage;
