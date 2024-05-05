import { Link, useNavigate, useSearchParams } from "react-router-dom";
import WeekPicker from "../../components/WeekPicker/WeekPicker";
import dayjs from "dayjs";
import KidPicker from "../../components/KidPicker/KidPicker";
import { getMonday } from "../../libs/utils";
import { useEffect, useState } from "react";
import api from "../../libs/api";
import "./PlansPage.scss";
import editIcon from "../../assets/icons/edit-gray-24px.svg";
import plusIcon from "../../assets/icons/plus-square-dotted.svg";
import cartIcon from "../../assets/icons/cart4.svg";
import personPlusIcon from "../../assets/icons/person-plus.svg";

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
          <div className="planlist">
            {days.map((day) => {
              const date = day.format("YYYY-MM-DD");
              const plan = plans.find((plan) => plan.date === date);
              return (
                <div className="planlist__item" key={date}>
                  <div className="planlist__item-day">
                    <div className="planlist__item-weekday">
                      {day.format("ddd")}
                    </div>
                    <div className="planlist__item-date">
                      {day.format("DD")}
                    </div>
                  </div>
                  {plan ? (
                    <div className="planlist__item-plan">
                      <Link to={`/recipes/${plan.recipe_id}`}>
                        <img
                          className="planlist__item-img"
                          src={plan.recipe_image}
                          alt="Recipe Image"
                        />
                      </Link>
                      <div className="planlist__item-info">
                        <div className="planlist__item-name">
                          {plan.recipe_name}
                        </div>

                        <button
                          className="planlist__item-button"
                          onClick={() => {
                            navigate(`/recipes?kidId=${kidId}&date=${date}`);
                          }}
                        >
                          <img src={editIcon} alt="Change Recipe" />
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div className="planlist__item-setplan">
                      <button
                        className="planlist__item-button planlist__item-setbutton"
                        onClick={() => {
                          navigate(`/recipes?kidId=${kidId}&date=${date}`);
                        }}
                      >
                        <img src={plusIcon} alt="Set Recipe" />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
          <div className="actions">
            <button
              onClick={() => {
                navigate(`/shopping?startDate=${startDate}&endDate=${endDate}`);
              }}
            >
              <img src={cartIcon} alt="Make a shopping list" />
              Make a shopping list
            </button>
          </div>
        </>
      ) : (
        <div className="actions">
          <button
            onClick={() => {
              navigate("/profile");
            }}
          >
            <img src={personPlusIcon} alt="Add a kid" />
            Add a kid
          </button>
        </div>
      )}
    </>
  );
}

export default PlansPage;
