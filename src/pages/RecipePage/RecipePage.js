import {
  Link,
  useNavigate,
  useParams,
  useSearchParams,
} from "react-router-dom";
import RecipeDetails from "../../components/RecipeDetails/RecipeDetails";
import { useEffect, useState } from "react";
import api from "../../libs/api";
import chevronLeftIcon from "../../assets/icons/chevron-left.svg";
import checkIcon from "../../assets/icons/check-lg.svg";

function RecipePage() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const [recipe, setRecipe] = useState();
  const loadRecipe = async function () {
    const result = await api.getRecipeDetails(id);
    setRecipe(result);
  };

  const kidId = searchParams.get("kidId");
  const date = searchParams.get("date");

  const onAdd = async () => {
    if (kidId && date && recipe) {
      await api.addPlan(date, kidId, recipe);
      navigate(`/plans?date=${date}&kidId=${kidId}`);
    }
  };

  useEffect(() => {
    loadRecipe();
  }, []);

  return (
    <>
      <div className="toolbar">
        <button
          className="toolbar__button"
          onClick={() => {
            navigate(-1);
          }}
        >
          <img src={chevronLeftIcon} alt="Back Icon" />
          Go back
        </button>
      </div>
      {recipe && (
        <>
          <RecipeDetails recipe={recipe} />
          {kidId && date && recipe && (
            <div className="actions">
              <button onClick={onAdd}>
                <img src={checkIcon} alt="Add Icon" />
                Add to plan
              </button>
            </div>
          )}
        </>
      )}
    </>
  );
}

export default RecipePage;
