import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import pluralize from "pluralize";
import api from "../../libs/api";
import dayjs from "dayjs";
import "./ShoppingPage.scss";
import cartPlusIcon from "../../assets/icons/cart-plus.svg";
import cartDashIcon from "../../assets/icons/cart-dash.svg";

function ShoppingPage() {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const [list, setList] = useState([]);

  const [itemsInCart, setItemsInCart] = useState([]);

  const [mode, setMode] = useState("ingredients");

  const getList = async () => {
    const list = await api.getShoppingList(startDate, endDate);
    setList(list);
    setItemsInCart([]);
    setMode("ingredients");
  };

  const onToggle = (item) => {
    if (itemsInCart.indexOf(item) === -1) {
      setItemsInCart([...itemsInCart, item]);
    } else {
      setItemsInCart(itemsInCart.filter((i) => item !== i));
    }
  };

  const onPrint = () => {};

  useEffect(() => {
    if (startDate && endDate) {
      getList();
    }
  }, [startDate, endDate]);

  return (
    <div className="shoppinglist">
      <h2 className="shoppinglist__title">
        {mode === "ingredients" ? "Ingredients" : "Shopping List"}
      </h2>
      <div className="shoppinglist__dates">
        {dayjs(startDate).format("MMM D")} - {dayjs(endDate).format("MMM D")}
      </div>
      <div className="shoppinglist__items"></div>
      {(mode === "ingredients" ? list : itemsInCart).map((item) => {
        const isItemInCart = itemsInCart.indexOf(item) !== -1;
        return (
          <div
            className={`shoppinglist__items-item ${
              isItemInCart ? "shoppinglist__items-item-active" : ""
            }`}
            key={item.foodId}
          >
            {item.image && (
              <img
                src={item.image}
                alt={`${item.food} image`}
                className="shoppinglist__items-image"
              />
            )}
            <div className="shoppinglist__items-info">
              <div className="shoppinglist__items-name">{item.food}</div>
              <div className="shoppinglist__items-measures">
                {item.measures.map((measure) => (
                  <div key={`${item.foodId}-${measure.name}`}>
                    {measure.quantity}{" "}
                    {measure.name
                      ? pluralize(
                          measure.name === "<unit>" ? "piece" : measure.name,
                          measure.quantity
                        )
                      : ""}
                  </div>
                ))}
              </div>
            </div>
            <div
              className="shoppinglist__items-toggle"
              onClick={() => onToggle(item)}
            >
              {isItemInCart ? (
                <img src={cartDashIcon} alt="Remove from cart" />
              ) : (
                <img src={cartPlusIcon} alt="Add to cart" />
              )}
            </div>
          </div>
        );
      })}
      <div className="actions">
        {mode === "ingredients" && (
          <button onClick={() => setMode("shoppinglist")}>
            Generate shopping list
          </button>
        )}
        {mode === "shoppinglist" && (
          <>
            <button
              className="secondary"
              onClick={() => setMode("ingredients")}
            >
              See all ingredients
            </button>
            <button onClick={onPrint}>Print</button>
          </>
        )}
      </div>
    </div>
  );
}

export default ShoppingPage;
