import styled from "@emotion/styled";

export const RoomBody = styled.div`
  display: flex;
  flex-direction: column;

  header {
    flex: 0 0 40px;
  }
  main {
    flex: 1 1 200px;
  }
`;

export const ChatBox = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
`;

export const ChatSender = styled.form`
  display: flex;
  justify-content: space-evenly;
  flex-direction: row;
  align-items: baseline;
`;

export const ChatMessageInputBox = styled.input`
  display: flex;
  border-radius: 20px;
  height: 40px;
  flex-basis: 80%;
`;

export const SendButton = styled.button`
  display: flex;
`;
