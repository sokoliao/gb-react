import React from "react";
import { Col, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { Outlet } from "react-router";
import { RootState } from "../../../../app/store";
import { addChat } from "../../chatSlice";
import { ChatListComponent } from "../chat-list/chat-list.component";

export const ChatsLayoutComponent: React.FC<{}> = () => {
  const chats = useSelector((state: RootState) => state.chats);
  const dispatch = useDispatch();
  return (
    <Row className="overflow-hidden flex-grow-1 m-0 flex-nowrap p-0">
      <Col xs="3" className="border-end">
        <ChatListComponent
          chats={chats}
          addChat={(name) => dispatch(addChat({ name: name }))}
        ></ChatListComponent>
      </Col>
      <Outlet />
    </Row>
  );
};
