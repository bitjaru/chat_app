import styled from "@emotion/styled";

export const ListBody = styled.div`
  display: flex;
  flex-direction: column;

  header {
    flex: 0 0 40px;
  }
  main {
    flex: 1 1 200px;
  }
`;

export const Header = styled.header`
  background-color: slateblue;
  height: 5vh;
  min-height: 40px;
  color: white;
  width: 100%;
  max-width: 728px;
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

export const ChatList = styled.ul`
  display: flex;
  flex-direction: column;
  gap: 10px;
  justify-content: flex-start;
  list-style: none;
  padding-left: 0;

  a {
    text-decoration: none;
    color: black;
  }

  a:visited {
    color: black;
  }
`;
