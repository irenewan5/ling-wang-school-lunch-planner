import { useState } from "react";
import recipesData from "../../assets/data/recipes.json";
import api from "../../libs/api";
import { Link, useNavigate, useSearchParams } from "react-router-dom";
import chevronLeftIcon from "../../assets/icons/chevron-left.svg";
import "./SearchPage.scss";

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
      <div className="searchform">
        <input
          className="searchform__input"
          value={q}
          onChange={(evt) => setQ(evt.target.value)}
          placeholder="Search..."
        />
        <button className="searchform__button" onClick={search}>
          search
        </button>
      </div>
      <div className="searchresults">
        {recipes.items?.map((item) => (
          <Link
            className="searchresults__item"
            key={item.id}
            to={`/recipes/${item.id}?date=${searchParams.get(
              "date"
            )}&kidId=${searchParams.get("kidId")}`}
          >
            <img className="searchresults__item-image" src={item.image} />
            <div className="searchresults__item-info">
              <div className="searchresults__item-name">{item.label}</div>
            </div>
          </Link>
        ))}
      </div>
    </>
  );
}

export default SearchPage;
