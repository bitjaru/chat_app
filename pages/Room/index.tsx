import React, {
  useCallback,
  useEffect,
  useState,
  VFC,
  FormEvent,
  useRef,
} from "react";
import {
  RoomBody,
  ChatBox,
  ChatSender,
  ChatMessageInputBox,
  SendButton,
} from "./styles";

import { IMessage, IUser } from "@typings/db";
import makeSection from "@utils/makeSection";
import ChatSectionDate from "@components/ChatSectionDate";
import Header from "@components/Header";
import { Message } from "@components/Messages/styles";

interface IChatMessage {
  roomid: number;
  name: string;
  data: IMessage[];
}
const chatMessageDummy: IChatMessage[] = [
  {
    roomid: 1001,
    name: "장만월 사장님",
    data: [
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 13, 8, 20),
        message: "스크롤 날짜 군집 테스트 13일 메시지",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 13, 8, 20),
        message: "스크롤 1313131313",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 13, 8, 20),
        message: "스크롤 1313131313",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 13, 8, 20),
        message: "스크롤 131313131313131313?",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 13, 8, 20),
        message: "스크롤?",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 13, 8, 20),
        message: "스크롤 13",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 14, 8, 20),
        message: "스크롤 테스트1111111111",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 14, 8, 20),
        message: "스크롤 테스트2222222222222222?",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 14, 8, 20),
        message: "스크롤 테스트33333?",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 14, 8, 20),
        message: "스크롤 테스트",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 15, 8, 20),
        message: "출근했니?",
        readed: true,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 15, 8, 23),
        message: "출근했냐고?",
        readed: false,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10002,
        receiverid: 10001,
        date: new Date(2022, 0, 15, 10, 25),
        message: "어딘데 출근 안하냐??",
        readed: false,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10001,
        receiverid: 10002,
        date: (() => {
          const now = new Date();
          now.setSeconds(now.getSeconds() - 10); //군집 테스트하려고 10초전 메시지 더미 생성
          return now;
        })(),
        message: "죄송합니다.",
        readed: false,
        progress: 100,
      },
      {
        type: "text",
        senderid: 10001,
        receiverid: 10002,
        date: new Date(),
        message: "해외 출장중입니다.",
        readed: false,
        progress: 100,
      },
    ],
  },
  { roomid: 1002, name: "신정근 바텐더", data: [] },
  { roomid: 1003, name: "이미라 의사", data: [] },
  { roomid: 1004, name: "스크롤 테스트 봇1", data: [] },
];

interface Props {
  roomId: number;
}
const Room: VFC<Props> = ({ roomId }) => {
  const user: IUser = { id: 10001, nickname: "bitjaru" };
  const [messagesDB, setMessagesDB] = useState(chatMessageDummy);
  const [messages, setMessages] = useState<IMessage[]>([]);
  const [formValue, setFormValue] = useState<string>("");
  const [roomName, setRoomName] = useState<string>("");
  const scrollRef = useRef<HTMLDivElement | null>(null); //메시지 전송하면 스크롤 맨 밑으로 내리기
  const now = new Date();

  const requestChatMessages = useCallback(
    (roomId: number) => {
      //axios request with uid
      //get uid matched messages
      const response = messagesDB.filter((e) => e.roomid == roomId)[0];
      if (response) {
        setRoomName(response.name);
      }
      return response.data;
    },
    [roomId]
  );

  const sendMessage = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setMessages([
      ...messages,
      {
        type: "text",
        senderid: user.id,
        receiverid: -1,
        date: new Date(),
        message: formValue,
        readed: true,
        progress: 100,
      },
    ]);
    setMessagesDB([
      ...messagesDB,
      { roomid: roomId, data: messages, name: roomName },
    ]);
    setFormValue("");
  };

  const sendImage = useCallback(
    (e, url: string) => {
      const result = [
        ...messages,
        {
          type: "image",
          senderid: user.id,
          receiverid: -1,
          date: new Date(),
          url: url,
          message: "",
          readed: false,
          progress: 0,
        },
      ];
      result.sort(
        (a: IMessage, b: IMessage) => a.date.getTime() - b.date.getTime()
      );
      setMessages(result);

      setTimeout(() => {
        const result = [
          ...messages,
          {
            type: "image",
            senderid: user.id,
            receiverid: -1,
            date: new Date(),
            url: url,
            message: "",
            readed: true,
            progress: 100,
          },
        ];
        setMessages(result);
        console.log("timeout");
      }, 1500);
      //image로 메시지 list에 추가하고, readed를 false로 일단 보냄.
      //component에서 내가보낸 이미지이고 readed가 false로 되어있으면 미전송 이미지로 인식하고 업로드 axios 및 애니메이션을 재생한다.
      //업로드가 완료되면 true로 변경한다.
      // scrollToBottom();
    },
    [messages, messagesDB]
  );

  useEffect(() => {
    const requestData = requestChatMessages(roomId);
    requestData.sort(
      (a: IMessage, b: IMessage) => a.date.getTime() - b.date.getTime()
    );
    setMessages(requestData);
    scrollToBottom();
    //console.log(requestChatMessages(roomId));
  }, [roomId]);

  const scrollToBottom = () => {
    // 스크롤 내리기
    if (scrollRef != null && scrollRef.current) {
      console.log("call scroll to bottom", { scrollRef, messages });
      scrollRef.current.scrollIntoView({
        behavior: "smooth",
      });
    }
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  return (
    //메시지를 날짜, 시간(1분내메시지 묶음)별로 군집시키고 컴포넌트로 표시한다.
    //groupby를 하는부분을 계속 시행착오해서 다시 구현함
    <RoomBody>
      <Header title={roomName} sendImage={sendImage} />
      <main>
        <ChatBox>
          <ChatSectionDate data={makeSection(messages)} />
        </ChatBox>
        <ChatSender
          onSubmit={(e) => {
            sendMessage(e);
          }}
        >
          <ChatMessageInputBox
            value={formValue}
            onChange={(e) => setFormValue(e.target.value)}
            placeholder="  메시지를 입력하세요..."
          />
          <SendButton
            type="submit"
            disabled={!formValue}
            onClick={() => scrollToBottom()}
          >
            전송
          </SendButton>
        </ChatSender>
      </main>
      <div className="footer" ref={scrollRef}></div>
    </RoomBody>
  );
};

export default Room;
