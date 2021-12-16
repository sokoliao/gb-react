import { Message } from "../../model/message";

export interface NewMessage {
  chatId: string;
  message: Message;
}
