import _ from "lodash";
import { Message } from "../../model/message";
import { User } from "../../model/user";
import { MessageComponent } from "../message/message.component";
import "./message-list.css";

interface MessageListProps {
  messages: Message[];
  currentUser: User;
}

export const MessageListComponent: React.FC<MessageListProps> = (props) => {
  const lastMessage = _.last(props.messages);
  return (
    <div className="message-list">
      {props.messages.map((message) => (
        <MessageComponent
          key={message.id}
          message={message}
          isCurrentUserAuthor={message.user === props.currentUser}
          shouldScrollIntoView={message === lastMessage}
        ></MessageComponent>
      ))}
    </div>
  );
};
