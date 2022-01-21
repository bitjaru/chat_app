//채팅구현은 처음이라 데이터구조를 많이 고민함
//단톡방은 ? 개인톡방은? 읽은or안읽은 메시지는 ?

export interface IUser {
  id: number;
  nickname: string;
}

export interface IChatRoom {
  roomid: number; //채팅방 id
  name: string;
  img: string;
  text: string;
  unreadcount: number;
  lastdate: Date;
}

export interface IMessage {
  type: string; //"text" | "image"
  //이미지인 메시지 타입도 추가해야되는거였다
  url?: string; //if message type is image
  senderid: number;
  //sernder: IUser;
  receiverid: number;
  //receiver: IUser;
  date: Date;
  message?: string;
  readed: boolean;
  progress: number;
}

export interface DayMessageGroup {
  date: Date;
  items: MinuteMessageGroup[];
}

export interface MinuteMessageGroup {
  // date: Date;
  hours: number;
  minutes: number;
  items: IMessage[];
}
