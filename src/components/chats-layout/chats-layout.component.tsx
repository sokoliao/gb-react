import _ from "lodash";
import React, { useContext, useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Outlet, useParams } from "react-router";
import { ColorThemeContext } from "../../App";
import { Chat, initialChats } from "../../model/chat";
import { Message } from "../../model/message";
import { ChatListComponent } from "../chat-list/chat-list.component";

export interface AppState {
  chats: Chat[];
  addMessageToChat: (chatId: string, message: Message) => void;
}

export const AppStateContext = React.createContext<AppState>({
  chats: [],
  addMessageToChat: (chat, message) => {},
});

export const ChatsLayoutComponent: React.FC<{}> = () => {
  const [chats, setChats] = useState<Chat[]>(() => initialChats);
  const addMessageToChat = (chatId: string, message: Message) => {
    setChats((currentChats) => {
      const [affected, unaffected] = _.partition(
        currentChats,
        (c) => c.id === chatId
      );
      const chat = _.first(affected);
      if (chat) {
        return [
          ...unaffected,
          { ...chat, messages: [...chat.messages, message] },
        ];
      } else {
        return currentChats;
      }
    });
  };
  const appState: AppState = {
    chats: chats,
    addMessageToChat: addMessageToChat,
  };
  const routeParams = useParams();

  console.log(routeParams["chatId"]);
  return (
    <AppStateContext.Provider value={appState}>
      <Row className="overflow-hidden flex-grow-1 m-0 flex-nowrap">
        <Col xs="3" className="border-end">
          <ChatListComponent chats={chats}></ChatListComponent>
        </Col>
        {<Outlet />}
      </Row>
    </AppStateContext.Provider>
  );
};
