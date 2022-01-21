import React, { useCallback, useEffect, useState } from "react";
import { ListBody, Header, ChatList } from "./styles";
import { BsJustify, BsPersonFill } from "react-icons/bs";
import ChatRoom from "@components/ChatRoom";
import { IChatRoom, IUser } from "@typings/db";
import { Link } from "react-router-dom";

const chatRoomListDummy = [
  {
    roomid: 1001,
    name: "장만월 사장님", //    uid: "u101010",
    img: "/img/thum1.png",
    text: "어딘데 출근 안하냐..",
    unreadcount: 3,
    lastdate: new Date(),
  },
  {
    roomid: 1002,
    name: "신정근 바텐더", //    uid: "u202020",
    img: "/img/thum2.png",
    text: "오시는 길에 와인 몇병만 사다주세요",
    unreadcount: 1,
    lastdate: new Date(2022, 0, 6, 13, 30),
  },
  {
    roomid: 1003,
    name: "이미라 의사", //    uid: "u303030",
    img: "/img/thum3.png",
    text: "휴가 잘 보내고 계신가요? 다름이아니라 지방출장을 가게 되었는데",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 4, 15, 23),
  },
  {
    roomid: 1004,
    name: "스크롤 테스트 봇1", //    uid: "u404040",
    img: "/img/thum4.png",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1005,
    name: "스크롤 테스트 봇2", //    uid: "u404040",
    img: "/img/thum5.png",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1006,
    name: "스크롤 테스트 봇3", //    uid: "u404040",
    img: "/img/thum6.png",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1007,
    name: "스크롤 테스트 봇4", //    uid: "u404040",
    img: "/img/thum7.png",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1008,
    name: "스크롤 테스트 봇5", //    uid: "u404040",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1009,
    name: "스크롤 테스트 봇6", //    uid: "u404040",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1010,
    name: "스크롤 테스트 봇7", //    uid: "u404040",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1011,
    name: "스크롤 테스트 봇8", //    uid: "u404040",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1012,
    name: "스크롤 테스트 봇8", //    uid: "u404040",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1013,
    name: "스크롤 테스트 봇8", //    uid: "u404040",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
  {
    roomid: 1014,
    name: "스크롤 테스트 봇8", //    uid: "u404040",
    img: "https://mblogthumb-phinf.pstatic.net/MjAyMDAyMDdfMTYw/MDAxNTgxMDg1NzUxMTUy.eV1iEw2gk2wt_YqPWe5F7SroOCkXJy2KFwmTDNzM0GQg.Z3Kd5MrDh07j86Vlb2OhAtcw0oVmGCMXtTDjoHyem9og.JPEG.7wayjeju/%EB%B0%B0%EC%9A%B0%ED%94%84%EB%A1%9C%ED%95%84%EC%82%AC%EC%A7%84_IMG7117.jpg?type=w800",
    text: "스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇스크롤 테스트 봇",
    unreadcount: 0,
    lastdate: new Date(2022, 0, 2, 13, 23),
  },
];

const List = () => {
  const user: IUser = { id: 10001, nickname: "bitjaru" };

  const [roomListServerDate, postRoomListServerData] =
    useState<IChatRoom[]>(chatRoomListDummy); //서버 채팅 리스트 데이터

  const [roomListData, setRoomListData] = useState<IChatRoom[]>([]); //서버에서 request 받아온 local 상태 채팅 리스트 데이터

  //서버없이 구현하려니 메시지를 읽었을때 안읽은 메시지수를 0으로 초기화 하는 부분이 고민됨.
  //서버없이가 더 불편하다
  //로컬스토리지에 저장할까 하다가 어차피 그거도 clear해주지 않으면 테스트시에 이쁘게 될거같지 않아서... 시간남으면 구현해야겠다.

  const requestRoomList = useCallback(() => {
    //axios
    //get roomListServerDate from server
    //then
    setRoomListData(roomListServerDate);
    //catch
  }, []);

  const onReadMessages = useCallback(
    (id: number) => {
      //axios post
      const test = roomListData[0];

      setRoomListData(
        roomListData.map((e) => (e.roomid == id ? { ...e, unreadcount: 0 } : e))
      );
      postRoomListServerData(roomListData);
      //catch
    },
    [roomListData]
  );

  useEffect(() => {
    requestRoomList();
  }, []);

  return (
    <ListBody>
      <Header>
        <BsJustify size="25"></BsJustify>
        <h1>채팅</h1>
        <BsPersonFill size="25"></BsPersonFill>
      </Header>
      <main>
        <ChatList>
          {roomListData?.map((e) => (
            <Link
              to={`/room${e.roomid}`}
              key={e.roomid}
              onClick={() => onReadMessages(e.roomid)}
            >
              <ChatRoom data={e} />
            </Link>
          ))}
        </ChatList>
      </main>
    </ListBody>
  );
};

export default List;
