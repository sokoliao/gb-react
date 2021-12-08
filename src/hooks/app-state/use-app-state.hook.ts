import _ from "lodash";
import { useState } from "react";
import { Chat, initialChats } from "../../model/chat";
import { Message } from "../../model/message";
import { AppState } from "./app-state";

export const useAppState = () => {
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
  return appState;
}