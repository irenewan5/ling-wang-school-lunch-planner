import axios from "axios";
import { useState } from "react";
import recipesData from "../../assets/data/recipes.json";

function SearchPage() {
  const [q, setQ] = useState("");
  const [recipes, setRecipes] = useState(recipesData);

  const search = async () => {
    const resp = await axios.get("http://localhost:3001/recipes", {
      params: {
        q,
      },
    });
    setRecipes(resp.data);
  };

  return (
    <>
      <div>
        <input value={q} onChange={(evt) => setQ(evt.target.value)} />
        <button onClick={search}>search</button>
      </div>
      <div>
        {recipes.items?.map((item) => (
          <div key={item.id}>
            <div>{item.label}</div>
            <div>
              <img src={item.image} />
            </div>
          </div>
        ))}
      </div>
    </>
  );
}

export default SearchPage;
