import { useSearchParams } from "react-router-dom";
import WeekPicker from "../../components/WeekPicker/WeekPicker";
import dayjs from "dayjs";
import KidPicker from "../../components/KidPicker/KidPicker";

function PlansPage() {
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
  return (
    <>
      <WeekPicker date={date} onChange={onWeekChange} />
      <KidPicker kidId={kidId} onChange={onKidChange} />
    </>
  );
}

export default PlansPage;
