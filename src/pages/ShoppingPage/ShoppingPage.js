import { useEffect, useRef, useState } from "react";
import { useSearchParams } from "react-router-dom";
import pluralize from "pluralize";
import { useReactToPrint } from "react-to-print";
import api from "../../libs/api";
import dayjs from "dayjs";
import "./ShoppingPage.scss";
import cartPlusIcon from "../../assets/icons/cart-plus.svg";
import cartDashIcon from "../../assets/icons/cart-dash.svg";
import squareIcon from "../../assets/icons/square.svg";

function ShoppingPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");
  const mode = searchParams.get("mode") ?? "ingredients";
  const dates = `${dayjs(startDate).format("MMM D")} - ${dayjs(endDate).format(
    "MMM D"
  )}`;

  const [list, setList] = useState([]);

  const [itemsInCart, setItemsInCart] = useState([]);

  const setMode = (newMode) => {
    const params = new URLSearchParams(searchParams);
    params.set("mode", newMode);
    setSearchParams(params);
  };

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

  const contentToPrint = useRef(null);
  const print = useReactToPrint({
    documentTitle: `Shopping list for ${dates}`,
    removeAfterPrint: true,
  });

  useEffect(() => {
    if (startDate && endDate) {
      getList();
    }
  }, [startDate, endDate]);

  return (
    <>
      <div className="shoppinglist" ref={contentToPrint}>
        <h2 className="shoppinglist__title">
          {mode === "ingredients" ? "Ingredients" : "Shopping List"}
        </h2>
        <div className="shoppinglist__dates">{dates}</div>
        <div className="shoppinglist__items">
          {(mode === "ingredients" ? list : itemsInCart).map((item) => {
            const isItemInCart = itemsInCart.indexOf(item) !== -1;
            return (
              <div
                className={`shoppinglist__items-item ${
                  mode === "ingredients" && isItemInCart
                    ? "shoppinglist__items-item-active"
                    : ""
                }`}
                key={item.foodId}
              >
                {item.image && mode === "ingredients" && (
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
                              measure.name === "<unit>"
                                ? "piece"
                                : measure.name,
                              measure.quantity
                            )
                          : ""}
                      </div>
                    ))}
                  </div>
                </div>
                {mode === "ingredients" && (
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
                )}
                {mode === "shoppinglist" && (
                  <div className="shoppinglist__items-check">
                    <img src={squareIcon} alt="Checkbox" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
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
            <button onClick={() => print(null, () => contentToPrint.current)}>
              Print
            </button>
          </>
        )}
      </div>
    </>
  );
}

export default ShoppingPage;
