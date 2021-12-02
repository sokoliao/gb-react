import { Chat } from "../../model/chat";
import { ChatRecordComponent } from "../chat-record/chat-record.component";
import "./chat-list.css";

interface ChatListProps {
  className?: string;
  chats: Chat[];
}

export const ChatListComponent: React.FC<ChatListProps> = (props) => {
  return (
    <div className={`chat-list-content ${props.className}`}>
      {props.chats.map((chat) => (
        <ChatRecordComponent key={chat.id} record={chat}></ChatRecordComponent>
      ))}
    </div>
  );
};
