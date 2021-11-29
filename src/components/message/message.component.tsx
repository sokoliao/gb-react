import { Message } from "../../model/message";
import "./message.css";
import moment from "moment";

interface MessageProps {
  message: Message;
  isCurrentUserAuthor: boolean;
}

export const MessageComponent: React.FC<MessageProps> = (props) => (
  <div
    className={
      props.isCurrentUserAuthor ? "message-wrapper-reverse" : "message-wrapper"
    }
  >
    <div className="message-logo">
      <img src={props.message.user.logoUrl} alt="logo" />
    </div>
    <div key={props.message.id} className="message-text">
      <div className="message-user-name">{props.message.user.name}</div>
      <div>{props.message.text}</div>
      <div className="message-timestamp">
        {moment(props.message.timestamp).format("h:mm")}
      </div>
    </div>
  </div>
);
