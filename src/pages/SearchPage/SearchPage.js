import { useState } from "react";
import recipesData from "../../assets/data/recipes.json";
import api from "../../libs/api";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import chevronLeftIcon from "../../assets/icons/chevron-left.svg";

function SearchPage() {
  const [q, setQ] = useState("");
  const [recipes, setRecipes] = useState(recipesData);
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  const search = async () => {
    const result = await api.searchRecipes(q);
    setRecipes(result);
  };

  return (
    <>
      <div>
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
        <input value={q} onChange={(evt) => setQ(evt.target.value)} />
        <button onClick={search}>search</button>
      </div>
      <div>
        {recipes.items?.map((item) => (
          <Link
            key={item.id}
            to={`/recipes/${item.id}?date=${searchParams.get(
              "date"
            )}&kidId=${searchParams.get("kidId")}`}
          >
            <div>{item.label}</div>
            <div>
              <img src={item.image} />
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SearchPage;
