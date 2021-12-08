import { Chat } from "../../model/chat";
import { Message } from "../../model/message";

export interface AppState {
  chats: Chat[];
  addMessageToChat: (chatId: string, message: Message) => void;
  addChat: (name: string) => void;
  deleteChat: (id: string) => void;
}
