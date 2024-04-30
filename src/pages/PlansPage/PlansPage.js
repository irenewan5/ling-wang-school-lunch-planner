import { useSearchParams } from "react-router-dom";
import WeekPicker from "../../components/WeekPicker/WeekPicker";
import dayjs from "dayjs";

function PlansPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const onWeekChange = (newStartDate) => {
    const params = new URLSearchParams(searchParams);
    params.set("startDate", newStartDate.format("YYYY-MM-DD"));
    setSearchParams(params);
  };

  const startDate = dayjs(searchParams.get("startDate") ?? undefined);
  return (
    <>
      <WeekPicker startDateOfWeek={startDate} onChange={onWeekChange} />
    </>
  );
}

export default PlansPage;
