import chevronLeftIcon from "../../assets/icons/chevron-left.svg";
import chevronRightIcon from "../../assets/icons/chevron-right.svg";
import "./WeekPicker.scss";

function WeekPicker({ date, onChange }) {
  const monday =
    date.day() === 6 ? date.add(2, "days") : date.startOf("week").add(1, "day");

  const friday = monday.add(4, "day");

  function selectPreviousWeek() {
    onChange(monday.add(-1, "week"));
  }

  function selectNextWeek() {
    onChange(monday.add(1, "week"));
  }

  return (
    <div className="weekpicker">
      <button className="weekpicker__button" onClick={selectPreviousWeek}>
        <img src={chevronLeftIcon} alt="Previous week" />
      </button>
      <div className="weekpicker__week">
        {monday.format("MMM D")} - {friday.format("MMM D")}
      </div>
      <button className="weekpicker__button" onClick={selectNextWeek}>
        <img src={chevronRightIcon} alt="Next week" />
      </button>
    </div>
  );
}
export default WeekPicker;
