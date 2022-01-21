import { IMessage, DayMessageGroup, MinuteMessageGroup } from "@typings/db";
import dayjs from "dayjs";
import groupBy from "lodash/fp/groupBy";
import _ from "lodash";
//날짜 구분선을 표시해 주세요
//한 사람이 1분 동안 메시지를 연속해서 보낸다면, 마지막 메시지만 전송 시간을 표시해 주세요.

export default function makeSection<T extends IMessage>(
  chatList: T[]
): DayMessageGroup[] {
  // [
  //   [ 2020-01-01 13:01:00
  //     2020-01-01 13:01:15 ]
  //   [ 2020-01-01 13:02:00 ]
  // ]
  // [
  //   [ 2020-01-02 13:01:00
  //     2020-01-02 13:01:00 ]
  //   [ 2020-01-02 13:03:00 ]
  // ]
  const r1 = _.groupBy(chatList, (chat) => {
    return dayjs(chat.date).format("YYYY-MM-DD");
  });
  const dailyMessageGroups: DayMessageGroup[] = [];
  for (const [key, value] of Object.entries(r1)) {
    const r2 = _.groupBy(value, (chat) => {
      return `${dayjs(chat.date).format("HH:mm")}${chat.senderid}${chat.type}`;
      //chat.senderid추가. 군집된 메시지가 누가 보냈는지 알아야 하므로
      //chat.typec 추가. 사진도 있으므로
    });
    const minuteMessageGroups: MinuteMessageGroup[] = [];
    for (const [_, value2] of Object.entries(r2)) {
      minuteMessageGroups.push({
        hours: value2[0].date.getHours(),
        minutes: value2[0].date.getMinutes(),
        items: value2,
      });
    }

    dailyMessageGroups.push({
      date: value[0].date,
      items: minuteMessageGroups,
    });
  }
  // console.log({ dailyMessageGroups });
  return dailyMessageGroups;
}
