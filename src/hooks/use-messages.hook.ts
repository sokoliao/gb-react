import _ from "lodash";
import { useState } from "react";
import { useParams } from "react-router";
import { chats } from "../model/chat";
import { Message } from "../model/message";

export const useMessages = (): [Message[], (newMessage: Message) => void] => {
  const params = useParams();
  const chatId = params["chatId"]!;
  const chat = _.find(chats, c => c.id === chatId);
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (newMessage: Message) => {
    setMessages(currentMessages => [...currentMessages, newMessage]);
  };
  return [messages, addMessage];
};
