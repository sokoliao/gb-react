import _ from "lodash";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { Message } from "../model/message";
import { RootState } from "../app/store";
import { addMessage } from "../features/chat/messageSlice";
import { Chat } from "../model/chat";

export const useMessages = (): [
  Chat,
  Message[],
  (newMessage: Message) => void
] => {
  const messageByChat = useSelector((state: RootState) => state.messages);
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
  const chats = useSelector((state: RootState) => state.chats);
  const chat = _.find(chats, (c) => c.id === chatId)!;
  const messages = _.values(messageByChat[chatId]);
  return [chat, messages, _.curry(addMessageToChat)(chatId)];
};
