import React from "react";
import "./App.css";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { chats } from "./model/chat";
import { ChatComponent } from "./components/chat/chat.component";
import { Col, Container, Nav, Navbar, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC<{}> = () => {
  return (
    <Container fluid className="app-wrapper">
      <Row style={{ height: "100%" }}>
        <Col xs="3">
          <ChatListComponent chats={chats}></ChatListComponent>
        </Col>
        <ChatComponent></ChatComponent>
      </Row>
    </Container>
  );
};

export default App;
