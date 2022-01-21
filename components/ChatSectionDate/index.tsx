import React, { VFC } from "react";
import { DayMessageGroup } from "@typings/db";
import ChatSectionMinute from "@components/ChatSectionMinute";
import { sectionDateFormat } from "@utils/dateFormat";
import { HrDate } from "./styles";

interface Props {
  data: DayMessageGroup[];
}
const ChatSectionDate: VFC<Props> = ({ data }) => {
  const now = new Date();
  return (
    <React.Fragment>
      {data.map((e) => (
        <div key={`${e.date}`}>
          <HrDate>
            {now.toDateString() === e.date.toDateString()
              ? `오늘`
              : `${sectionDateFormat(e.date)}`}
          </HrDate>
          <ChatSectionMinute data={e.items}></ChatSectionMinute>
        </div>
      ))}
    </React.Fragment>
  );
};
export default ChatSectionDate;
