import React, { useState } from "react";
import "./App.css";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { chats } from "./model/chat";
import { ChatComponent } from "./components/chat/chat.component";
import {
  Button,
  Col,
  Container,
  Form,
  Nav,
  Navbar,
  Row,
} from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faMoon,
  faSun,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";

interface ColorTheme {
  text: string;
  textSecondary: string;
  background: string;
  icon: IconDefinition;
  button: string;
}
const darkColorTheme: ColorTheme = {
  text: "text-light",
  textSecondary: "text-white-50",
  background: "bg-dark",
  icon: faMoon,
  button: "light",
};
const brightColorTheme: ColorTheme = {
  text: "text-dark",
  textSecondary: "text-black-50",
  background: "bg-light",
  icon: faSun,
  button: "dark",
};
const defaultColorTheme = brightColorTheme;

const useColorTheme = (): [ColorTheme, () => void] => {
  const [colorTheme, setColorTheme] = useState<ColorTheme>(defaultColorTheme);
  const switchColorTheme = () => {
    setColorTheme((current) => {
      if (current === brightColorTheme) {
        return darkColorTheme;
      } else {
        return brightColorTheme;
      }
    });
  };
  return [colorTheme, switchColorTheme];
};

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
        <Nav className="justify-content-end border-bottom">
          <Nav.Item className="d-flex align-items-center">
            <Button
              className="m-2"
              onClick={switchColorTheme}
              variant={colorTheme.button}
            >
              <FontAwesomeIcon
                style={{ height: "1rem" }}
                icon={colorTheme.icon}
              />
            </Button>
          </Nav.Item>
        </Nav>
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
