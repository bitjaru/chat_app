import React, { VFC, useEffect } from "react";
import { ChatArea, RoomBox, Thumnail } from "@components/ChatRoom/styles";
import { IChatRoom } from "@typings/db";
import { dateFormat } from "@utils/dateFormat";
import { css } from "@emotion/react";

interface Props {
  data: IChatRoom;
}

const ChatRoom: VFC<Props> = ({ data }) => {
  const now = new Date();

  useEffect(() => {
    dateFormat(data.lastdate);
  }, []);
  return (
    <RoomBox>
      <div className="thumnail">
        <Thumnail src={data.img} />
      </div>
      <div className="text">
        <p className="chat-user">{data.name}</p>
        <p className="chat-content">
          {data.text.length > 25
            ? data.text.substring(0, 25) + "..."
            : data.text}
        </p>
      </div>
      <div className="status">
        <p className="chat-lastdate">{dateFormat(data.lastdate)}</p>
        <div className="unread-count">{data.unreadcount}</div>
      </div>
    </RoomBox>
  );
};

export default ChatRoom;
