import React, { FC } from "react";
import { useParams } from "react-router";
import "react-toastify/dist/ReactToastify.css";

import List from "@pages/List";
import Room from "@pages/Room";
import { IUser } from "@typings/db";

interface Props {
  page: string;
}

const Workspace: FC<Props> = ({ page }) => {
  const params = useParams<{ room_id?: string }>();
  const { room_id } = params;
  const user: IUser = { id: 10001, nickname: "bitjaru" };
  console.log({ page, room_id });

  return (
    <React.Fragment>
      {page == "list" ? (
        <List></List>
      ) : page == "room" ? (
        <Room roomId={room_id ? parseInt(room_id, 10) : 0}></Room>
      ) : (
        <div>none</div>
      )}
    </React.Fragment>
  );
};

export default Workspace;
