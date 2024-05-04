import { useState } from "react";
import recipesData from "../../assets/data/recipes.json";
import api from "../../libs/api";
import { Link, useSearchParams } from "react-router-dom";

function SearchPage() {
  const [q, setQ] = useState("");
  const [recipes, setRecipes] = useState(recipesData);
  const [searchParams] = useSearchParams();

  const search = async () => {
    const result = await api.searchRecipes(q);
    setRecipes(result);
  };

  return (
    <>
      <div>
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
