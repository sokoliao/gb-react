import React, { useState } from "react";
import "./App.css";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
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
import { Layout } from "./components/layout/layout.component";
import { ChatsLayoutComponent } from "./components/chats-layout/chats-layout.component";
import { AppState } from "./hooks/app-state/app-state";
import { useAppState } from "./hooks/app-state/use-app-state.hook";

export const ColorThemeContext =
  React.createContext<ColorTheme>(defaultColorTheme);

export const AppStateContext = React.createContext<AppState>({
  chats: [],
  addMessageToChat: () => {},
});

const App: React.FC<{}> = () => {
  const [colorTheme, switchColorTheme] = useColorTheme();
  const appState = useAppState();
  return (
    <BrowserRouter>
      <AppStateContext.Provider value={appState}>
        <ColorThemeContext.Provider value={colorTheme}>
          <Routes>
            <Route
              path="/"
              element={<Layout switchColorTheme={switchColorTheme}></Layout>}
            >
              <Route path="chats" element={<ChatsLayoutComponent />}>
                <Route index element={<h1>start a new chat</h1>}></Route>
                <Route
                  path=":chatId"
                  element={<ChatComponent></ChatComponent>}
                ></Route>
              </Route>
              <Route path="profile" element={<h1>profile</h1>}></Route>
            </Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Routes>
        </ColorThemeContext.Provider>
      </AppStateContext.Provider>
    </BrowserRouter>
  );
};

export default App;
