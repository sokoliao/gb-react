import { useState } from "react";
import { Message } from "../model/message";

export const useMessages = (): [Message[], (newMessage: Message) => void] => {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (newMessage: Message) => {
    setMessages(currentMessages => [...currentMessages, newMessage]);
  };
  return [messages, addMessage];
};
