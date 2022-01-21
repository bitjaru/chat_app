import React, { FC } from "react";
import { MinuteMessageGroup } from "@typings/db";
import Messages from "@components/Messages";

interface Props {
  data: MinuteMessageGroup[];
}
const ChatSectionMinute: FC<Props> = ({ data }) => {
  return (
    //key에 타입, sender도 고려해야할듯
    <React.Fragment>
      {data.map((e) => (
        <div
          key={`${e.hours}${e.minutes}${e.items[0].type}${e.items[0].senderid}`}
        >
          <Messages
            data={e.items}
            time={{ hours: e.hours, minutes: e.minutes }}
          ></Messages>
        </div>
      ))}
    </React.Fragment>
  );
};
export default ChatSectionMinute;
