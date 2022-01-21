import styled from "@emotion/styled";

export const HeaderContainer = styled.div`
  position: fixed;
  width: 100%;
  max-width: 728px;
`;

export const HeaderBody = styled.header`
  background-color: slateblue;
  height: 5vh;
  min-height: 30px;
  color: white;
  top: 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  z-index: 99;
  padding: 10px;
  box-sizing: border-box;

  & h1 {
    font-size: 20px;
    display: inline-flex;
    align-items: center;
  }
`;

export const HeaderTitle = styled.div``;
export const HeaderUtilIcons = styled.div`
  display: flex;
  align-items: baseline;

  .util-icon-image {
    display: flex;
  }
  .util-icon-chat-search {
    display: flex;
  }
`;

export const ImagePopupBody = styled.div`
  background-color: slateblue;
  display: flex;
  &.popupbody-active {
    height: 8vh;
    transition: ".25s all";
  }
  gap: 5px;
`;

export const ImageThumnail = styled.img`
  object-fit: cover;
  width: 50px;
  height: 50px;
  align-self: end;
  justify-self: center;
  display: flex;
  border-radius: 5px;
  margin-left: 5px;
  margin-bottom: 5px;
`;
