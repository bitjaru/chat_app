import React, { FC, useState } from "react";
import { IMessage, IUser } from "@typings/db";
import {
  SentMessage,
  RecievedMessage,
  Message,
  SentMessageDate,
  RecievedMessageDate,
  Contents,
  SentImage,
  ImageUploadContainer,
} from "./styles";
import ProgressCircle from "@components/ProgressCircle";

interface Props {
  data: IMessage[];
  time: { hours: number; minutes: number };
}
const Messages: FC<Props> = ({ data, time }) => {
  const user: IUser = { id: 10001, nickname: "bitjaru" };

  const timeFormat = (hours: number, minutes: number) => {
    return `${("00" + hours).slice(-2)}:${("00" + minutes).slice(-2)}`;
  };

  const [upLoadQueue, setUploadQueue] = useState([]);

  //가상 서버에 axios 업로드 프로그레스를 만들고 싶지만 시간이 없다 ㅠ
  //된다면 수정할것

  if (user.id == data[0].senderid) {
    return (
      <Message className="sent">
        <Contents>
          {data.map((e, index) =>
            e.type == "text" ? (
              <SentMessage key={`${index}${e.type}`}>{e.message}</SentMessage>
            ) : (
              <ImageUploadContainer key={`${index}${e.type}`}>
                <SentImage src={e.url} />
                {e.readed == false ? (
                  <ProgressCircle
                    progress={e.progress}
                    size={150}
                    strokeWidth={10}
                    circleOneStroke="#d9edfe"
                    circleTwoStroke="slateblue"
                  />
                ) : null}
              </ImageUploadContainer>
            )
          )}
        </Contents>
        <SentMessageDate>
          {timeFormat(time.hours, time.minutes)}
        </SentMessageDate>
      </Message>
    );
  } else {
    return (
      <Message>
        <Contents>
          {data.map((e, index) => (
            <RecievedMessage key={index}>{e.message}</RecievedMessage>
          ))}
        </Contents>
        <RecievedMessageDate>
          {timeFormat(time.hours, time.minutes)}
        </RecievedMessageDate>
      </Message>
    );
  }
};
export default Messages;
