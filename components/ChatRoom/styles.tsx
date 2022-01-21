import styled from "@emotion/styled";
import { css } from "@emotion/react";

export const ChatArea = styled.div`
  display: flex;
  width: 100%;
  padding: 20px;
  padding-top: 0;
`;

export const RoomBox = styled.li`
  flex-basis: 5rem;
  flex-shrink: 0;
  margin: 0px;
  display: flex;
  flex-direction: row;
  justify-content: center;

  .thumnail {
    flex: 0 0 70px;
    display: flex;
    align-content: center;
    justify-content: center;
  }
  .text {
    flex: 1 1 200px;
  }
  .status {
    flex: 0 0 50px;
  }
  p {
    margin: 0;
  }
  .chat-user {
    font-size: 18px;
    font-weight: 700;
  }
  .chat-content {
    font-size: 14px;
    color: #666;
  }
  .chat-lastdate {
    font-size: 7px;
  }
  .unread-count {
    padding: 4px;
    background-color: slateblue;
    border-radius: 50%;
    width: 1.5em;
    height: 1.5em;
    flex: 0 0 auto;
    text-align: center;
    color: white;
  }
`;

export const Thumnail = styled.img`
  border-radius: 50%;
  object-fit: cover;
  width: 50px;
  height: 50px;
  align-self: center;
  justify-self: center;
`;
