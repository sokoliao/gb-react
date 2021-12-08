import React, { useState } from "react";
import "./App.css";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { Chat, chats } from "./model/chat";
import { ChatComponent } from "./components/chat/chat.component";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorTheme, defaultColorTheme } from "./hooks/color-theme/color-theme";
import { useColorTheme } from "./hooks/color-theme/use-color-theme.hook";
import { HeaderComponent } from "./components/header/header.component";
import { currentUser } from "./model/user";
import _ from "lodash";
import { Route, Router, Routes } from "react-router";
import { BrowserRouter } from "react-router-dom";

export const ColorThemeContext =
  React.createContext<ColorTheme>(defaultColorTheme);

interface AppState {
  currentChatId: string;
  chats: Chat[];
}

const App: React.FC<{}> = () => {
  const [colorTheme, switchColorTheme] = useColorTheme();
  return (
    <BrowserRouter>
      <ColorThemeContext.Provider value={colorTheme}>
        <Container
          fluid
          className={`app-wrapper d-flex flex-column p-0 ${colorTheme.background} ${colorTheme.text}`}
        >
          <HeaderComponent
            switchColorTheme={switchColorTheme}
          ></HeaderComponent>
          <Row className="overflow-hidden flex-grow-1 m-0 flex-nowrap">
            <Col xs="3" className="border-end">
              <ChatListComponent chats={chats}></ChatListComponent>
            </Col>
            <Routes>
              <Route path="/" element={<h1>200</h1>}>
                <Route path="/chats" element={<h1>chats</h1>}></Route>
                <Route path="/profile" element={<h1>profile</h1>}></Route>
              </Route>
              <Route path="*" element={<h1>404</h1>}></Route>
            </Routes>
            {/* <ChatComponent></ChatComponent> */}
          </Row>
        </Container>
      </ColorThemeContext.Provider>
    </BrowserRouter>
  );
};

export default App;
