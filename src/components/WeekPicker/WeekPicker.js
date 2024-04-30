import dayjs from "dayjs";
import chevronLeftIcon from "../../assets/icons/chevron-left.svg";
import chevronRightIcon from "../../assets/icons/chevron-right.svg";
import "./WeekPicker.scss";

function WeekPicker({ startDateOfWeek, onChange }) {
  const startDate =
    dayjs(startDateOfWeek) ?? dayjs().startOf("week").add(1, "day");
  const endDate = startDate.add(4, "day");

  function selectPreviousWeek() {
    onChange(startDate.add(-1, "week"));
  }

  function selectNextWeek() {
    onChange(startDate.add(1, "week"));
  }

  return (
    <div className="weekpicker">
      <button className="weekpicker__button" onClick={selectPreviousWeek}>
        <img src={chevronLeftIcon} alt="Previous week" />
      </button>
      <div className="weekpicker__week">
        {startDate.format("MMM D")} - {endDate.format("MMM D")}
      </div>
      <button className="weekpicker__button" onClick={selectNextWeek}>
        <img src={chevronRightIcon} alt="Next week" />
      </button>
    </div>
  );
}
export default WeekPicker;
