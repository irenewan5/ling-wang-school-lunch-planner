import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import pluralize from "pluralize";
import api from "../../libs/api";

function ShoppingPage() {
  const [searchParams] = useSearchParams();
  const startDate = searchParams.get("startDate");
  const endDate = searchParams.get("endDate");

  const [list, setList] = useState([]);

  const getList = async () => {
    const list = await api.getShoppingList(startDate, endDate);
    setList(list);
  };

  useEffect(() => {
    if (startDate && endDate) {
      getList();
    }
  }, [startDate, endDate]);

  return (
    <>
      {list.map((item) => (
        <div key={item.foodId}>
          {item.image && <img src={item.image} alt={`${item.food} image`} />}
          <div>{item.food}</div>
          <div>
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
      ))}
    </>
  );
}

export default ShoppingPage;
