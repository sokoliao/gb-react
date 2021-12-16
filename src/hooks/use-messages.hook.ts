import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Message } from "../model/message";
import { addMessage } from "../features/chat/chatSlice";
import { RootState } from "../app/store";

export const useMessages = (): [
  string,
  Message[],
  (newMessage: Message) => void
] => {
  const chats = useSelector((state: RootState) => state.chats);
  const dispatch = useDispatch();
  const addMessageToChat = (chatId: string, message: Message) =>
    dispatch(
      addMessage({
        chatId: chatId,
        message: message,
      })
    );
  const routeParams = useParams();
  const chatId = routeParams["chatId"]!;
  const { name, messages } = _.find(chats, (c) => c.id === chatId)!;
  return [name, messages, _.curry(addMessageToChat)(chatId)];
};
