import _ from "lodash";
import { useContext } from "react";
import { useParams } from "react-router";
import { AppStateContext } from "../App";
import { Message } from "../model/message";

export const useMessages = (): [string, Message[], (newMessage: Message) => void] => {
  const { chats, addMessageToChat } = useContext(AppStateContext);
  const routeParams = useParams();
  const chatId = routeParams["chatId"]!;
  const { name, messages } = _.find(chats, (c) => c.id === chatId)!;
  const addMessage = _.curry(addMessageToChat)(chatId);
  return [
    name,
    messages,
    addMessage
  ];
};
