import { Link, useNavigate, useSearchParams } from "react-router-dom";
import WeekPicker from "../../components/WeekPicker/WeekPicker";
import dayjs from "dayjs";
import KidPicker from "../../components/KidPicker/KidPicker";
import { getMonday } from "../../libs/utils";
import { useEffect, useState } from "react";
import api from "../../libs/api";

function PlansPage() {
  const navigate = useNavigate();
  const [plans, setPlans] = useState([]);
  const [kids, setKids] = useState([]);

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
  const kidId = searchParams.get("kidId")
    ? parseInt(searchParams.get("kidId"))
    : kids[0]?.id;

  const monday = getMonday(date);

  const days = [
    monday,
    monday.add(1, "day"),
    monday.add(2, "day"),
    monday.add(3, "day"),
    monday.add(4, "day"),
  ];

  const startDate = monday.format("YYYY-MM-DD");
  const endDate = monday.add(4, "days").format("YYYY-MM-DD");

  const getPlans = async () => {
    const plans = await api.getPlans(kidId, startDate, endDate);
    setPlans(plans);
  };

  useEffect(() => {
    api.getKids().then((result) => setKids(result));
  }, []);

  useEffect(() => {
    if (kidId && startDate && endDate) {
      getPlans();
    }
  }, [kidId, startDate, endDate]);

  return (
    <>
      <WeekPicker date={date} onChange={onWeekChange} />
      {kids.length > 0 ? (
        <>
          <KidPicker kids={kids} kidId={kidId} onChange={onKidChange} />
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
                      <div>
                        <Link to={`/recipes/${plan.recipe_id}`}>
                          <img src={plan.recipe_image} />
                          <div>{plan.recipe_name}</div>
                        </Link>
                        <button
                          onClick={() => {
                            navigate(`/recipes?kidId=${kidId}&date=${date}`);
                          }}
                        >
                          Change recipe
                        </button>
                      </div>
                    ) : (
                      <button
                        onClick={() => {
                          navigate(`/recipes?kidId=${kidId}&date=${date}`);
                        }}
                      >
                        Add recipe
                      </button>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </>
      ) : (
        <>
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            Add a kid
          </button>
        </>
      )}
    </>
  );
}

export default PlansPage;
