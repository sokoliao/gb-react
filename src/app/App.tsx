import React from "react";
import "./App.css";
import { ColorThemeContext } from "../common/color-theme/color-theme";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import { Layout } from "./layout/layout.component";
import { ChatsLayoutComponent } from "../features/chat/components/chats-layout/chats-layout.component";
import {
  ChatComponent,
  ChatGuardComponent,
} from "../features/chat/components/chat/chat.component";
import { ProfileComponent } from "../features/profile/profile.component";
import { useColorTheme } from "../hooks/use-color-theme.hook";
import "bootstrap/dist/css/bootstrap.min.css";

const App: React.FC<{}> = () => {
  const [colorTheme, switchColorTheme] = useColorTheme();
  return (
    <BrowserRouter>
      <Provider store={store}>
        <ColorThemeContext.Provider value={colorTheme}>
          <Routes>
            <Route
              path="/"
              element={<Layout switchColorTheme={switchColorTheme}></Layout>}
            >
              <Route path="chats" element={<ChatsLayoutComponent />}>
                <Route index element={<h1>Start talking</h1>}></Route>
                <Route
                  path=":chatId"
                  element={
                    <ChatGuardComponent>
                      <ChatComponent></ChatComponent>
                    </ChatGuardComponent>
                  }
                ></Route>
              </Route>
              <Route path="profile" element={<ProfileComponent />}></Route>
            </Route>
            <Route path="*" element={<h1>404</h1>}></Route>
          </Routes>
        </ColorThemeContext.Provider>
      </Provider>
    </BrowserRouter>
  );
};

export default App;
