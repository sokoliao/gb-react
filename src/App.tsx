import React from "react";
import "./App.css";
import { ChatComponent } from "./components/chat/chat.component";
import "bootstrap/dist/css/bootstrap.min.css";
import { ColorTheme, defaultColorTheme } from "./hooks/color-theme/color-theme";
import { useColorTheme } from "./hooks/color-theme/use-color-theme.hook";
import { Route, Routes } from "react-router";
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
  addChat: () => {},
  deleteChat: () => {},
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
