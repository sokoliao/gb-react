import { Nav } from "react-bootstrap";
import { Chat } from "../../model/chat";
import { ChatRecordComponent } from "../chat-record/chat-record.component";
import "./chat-list.css";

interface ChatListProps {
  chats: Chat[];
}

export const ChatListComponent: React.FC<ChatListProps> = (props) => {
  return (
    <Nav className="flex-column chat-list-content">
      {props.chats.map((chat) => (
        <ChatRecordComponent key={chat.id} record={chat}></ChatRecordComponent>
      ))}
    </Nav>
  );
};
