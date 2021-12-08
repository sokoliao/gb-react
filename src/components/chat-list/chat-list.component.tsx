import { Nav, Row } from "react-bootstrap";
import { Chat } from "../../model/chat";
import { ChatRecordComponent } from "../chat-record/chat-record.component";
import { NewChatComponent } from "../new-chat/new-chat.component";
import "./chat-list.css";

interface ChatListProps {
  chats: Chat[];
  addChat: (name: string) => void;
}

export const ChatListComponent: React.FC<ChatListProps> = (props) => {
  return (
    <Row className="chat-list-content">
      <Nav className="flex-column p-0">
        <NewChatComponent addChat={props.addChat}></NewChatComponent>
        {props.chats.map((chat) => (
          <ChatRecordComponent
            key={chat.id}
            record={chat}
          ></ChatRecordComponent>
        ))}
      </Nav>
    </Row>
  );
};
