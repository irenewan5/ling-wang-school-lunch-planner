import { useSearchParams } from "react-router-dom";
import WeekPicker from "../../components/WeekPicker/WeekPicker";
import dayjs from "dayjs";
import KidPicker from "../../components/KidPicker/KidPicker";

function PlansPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onWeekChange = (newStartDate) => {
    const params = new URLSearchParams(searchParams);
    params.set("startDate", newStartDate.format("YYYY-MM-DD"));
    setSearchParams(params);
  };

  const startDate = dayjs(searchParams.get("startDate") ?? undefined);

  const onKidChange = (newKidId) => {
    const params = new URLSearchParams(searchParams);
    params.set("kidId", newKidId);
    setSearchParams(params);
  };
  const kidId = searchParams.get("kidId") ?? undefined;
  return (
    <>
      <WeekPicker startDateOfWeek={startDate} onChange={onWeekChange} />
      <KidPicker kidId={kidId} onChange={onKidChange} />
    </>
  );
}

export default PlansPage;
