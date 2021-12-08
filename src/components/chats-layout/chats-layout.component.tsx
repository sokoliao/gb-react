import React, { useContext } from "react";
import { Col, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { AppStateContext } from "../../App";
import { ChatListComponent } from "../chat-list/chat-list.component";

export const ChatsLayoutComponent: React.FC<{}> = () => {
  const { chats } = useContext(AppStateContext);
  return (
    <Row className="overflow-hidden flex-grow-1 m-0 flex-nowrap">
      <Col xs="3" className="border-end">
        <ChatListComponent chats={chats}></ChatListComponent>
      </Col>
      {<Outlet />}
    </Row>
  );
};
