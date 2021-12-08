import React, { useContext } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet } from "react-router";
import { ColorThemeContext } from "../../App";
import { chats } from "../../model/chat";
import { ChatListComponent } from "../chat-list/chat-list.component";

export const ChatsLayoutComponent: React.FC<{}> = () => {
  return (
    <Row className="overflow-hidden flex-grow-1 m-0 flex-nowrap">
      <Col xs="3" className="border-end">
        <ChatListComponent chats={chats}></ChatListComponent>
      </Col>
      {<Outlet />}
    </Row>
  );
};
