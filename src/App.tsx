import React from "react";
import "./App.css";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { chats } from "./model/chat";
import { ChatComponent } from "./components/chat/chat.component";
import { Col, Container, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorTheme, defaultColorTheme } from "./hooks/color-theme/color-theme";
import { useColorTheme } from "./hooks/color-theme/use-color-theme.hook";
import { HeaderComponent } from "./components/header/header.component";

export const ColorThemeContext =
  React.createContext<ColorTheme>(defaultColorTheme);

const App: React.FC<{}> = () => {
  const [colorTheme, switchColorTheme] = useColorTheme();
  return (
    <ColorThemeContext.Provider value={colorTheme}>
      <Container
        fluid
        className={`app-wrapper d-flex flex-column ${colorTheme.background} ${colorTheme.text}`}
      >
        <HeaderComponent switchColorTheme={switchColorTheme}></HeaderComponent>
        <Row className="overflow-hidden flex-grow-1">
          <Col xs="3" className="border-end">
            <ChatListComponent chats={chats}></ChatListComponent>
          </Col>
          <ChatComponent></ChatComponent>
        </Row>
      </Container>
    </ColorThemeContext.Provider>
  );
};

export default App;
