import dayjs from "dayjs";

export function getMonday(date) {
  return dayjs(date).day() === 6
    ? date.add(2, "days")
    : date.startOf("week").add(1, "day");
}
