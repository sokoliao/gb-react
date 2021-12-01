import { Chat } from "../../model/chat";
import "./chat-record.css";

interface ChatRecordProps {
  record: Chat;
}

export const ChatRecordComponent: React.FC<ChatRecordProps> = (props) => {
  return (
    <div className="chat-record-wrapper">
      <div className="chat-record-logo">
        <img src={props.record.logoUrl} alt="logo" />
      </div>
      <div className="chat-record-text">{props.record.name}</div>
    </div>
  );
};
