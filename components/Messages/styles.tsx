import styled from "@emotion/styled";
export const Message = styled.div`
  display: flex;
  &.sent {
    flex-direction: row-reverse;
  }
`;

export const Contents = styled.div`
  gap: 10px;
  flex-direction: column;
  display: flex;
  align-items: start;
  padding: 12px;
`;

export const SentMessage = styled.div`
  background-color: slateblue;
  color: white;
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  padding: 8px;
  align-self: flex-end;
  align-items: right;
`;

export const RecievedMessage = styled.div`
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  padding: 8px;
  flex: 0 0 auto;
  max-width: 20ch;
  align-items: left;
`;

export const SentMessageDate = styled.div`
  display: flex;
  padding: 19px;
  align-self: flex-end;
  align-items: right;
  flex: 0 0 auto;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
`;

export const RecievedMessageDate = styled.div`
  display: flex;
  padding: 19px;
  flex: 0 0 auto;
  max-width: 20ch;
  align-items: left;
  align-self: flex-end;
  color: rgba(0, 0, 0, 0.35);
  font-size: 12px;
`;

export const SentImage = styled.img`
  display: flex;
  border-radius: 10px;
  box-shadow: 0px 1px 5px 1px rgba(0, 0, 0, 0.15);
  padding: 8px;
  align-self: flex-end;
  align-items: right;
  max-width: 20ch;
`;

export const ImageUploadContainer = styled.div`
  position: relative;
`;
