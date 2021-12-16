import _ from "lodash";
import { useState } from "react";
import { Chat, createChat, initialChats } from "../../model/chat";
import { Message } from "../../model/message";

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
          { ...chat, messages: [...chat.messages, message] },
          ...unaffected,
        ];
      } else {
        return currentChats;
      }
    });
  };
  const addChat = (name: string) => {
    setChats((current) => {
      return [
        createChat(name),
        ...current
      ];
    });
  }
  const deleteChat = (id: string) => {
    setChats((current) => {
      return _.filter(current, c => c.id !== id);
    })
  }
  return {
    chats: chats,
    addMessageToChat: addMessageToChat,
    addChat: addChat,
    deleteChat: deleteChat,
  };
}
