import { useNavigate, useSearchParams } from "react-router-dom";
import WeekPicker from "../../components/WeekPicker/WeekPicker";
import dayjs from "dayjs";
import KidPicker from "../../components/KidPicker/KidPicker";
import { getMonday } from "../../libs/utils";
import { useState } from "react";

function PlansPage() {
  const navigation = useNavigate();
  const [plans, setPlans] = useState([]);

  const [searchParams, setSearchParams] = useSearchParams();
  const onWeekChange = (newDate) => {
    const params = new URLSearchParams(searchParams);
    params.set("date", newDate.format("YYYY-MM-DD"));
    setSearchParams(params);
  };

  const date = dayjs(searchParams.get("date") ?? undefined);

  const onKidChange = (newKidId) => {
    const params = new URLSearchParams(searchParams);
    params.set("kidId", newKidId);
    setSearchParams(params);
  };
  const kidId = searchParams.get("kidId") ?? undefined;

  const monday = getMonday(date);

  const days = [
    monday,
    monday.add(1, "day"),
    monday.add(2, "day"),
    monday.add(3, "day"),
    monday.add(4, "day"),
  ];

  return (
    <>
      <WeekPicker date={date} onChange={onWeekChange} />
      <KidPicker kidId={kidId} onChange={onKidChange} />

      <div>
        {days.map((day) => {
          const date = day.format("YYYY-MM-DD");
          const plan = plans.find((plan) => plan.date === date);
          return (
            <div key={date}>
              <div>{day.format("ddd")}</div>
              <div>{day.format("DD")}</div>
              <div>
                {plan ? (
                  plan.recipe_label
                ) : (
                  <button
                    onClick={() => {
                      navigation(`/recipes?kidId=${kidId}&date=${date}`);
                    }}
                  >
                    add recipe
                  </button>
                )}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default PlansPage;
