import dayjs from "dayjs";
import "dayjs/locale/ko";
dayjs.locale("ko");

export const dateFormat = (date: Date) => {
  const now = new Date();
  if (now.toDateString() === date.toDateString()) {
    return dayjs(date).format("HH:mm");
  }
  return dayjs(date).format("dddd");
};

export const sectionDateFormat = (date: Date) => {
  const now = new Date();
  if (now.toDateString() === date.toDateString()) {
    return "오늘";
  }
  return dayjs(date).format("YYYY년 MM월 DD일");
};
