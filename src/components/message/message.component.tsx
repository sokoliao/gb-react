import { Message } from "../../model/message";
import "./message.css";
import moment from "moment";
import { useEffect, useRef } from "react";

interface MessageProps {
  message: Message;
  isCurrentUserAuthor: boolean;
  shouldScrollIntoView: boolean;
}

export const MessageComponent: React.FC<MessageProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref && props.shouldScrollIntoView) {
      ref.current?.scrollIntoView();
    }
  }, [ref, props.shouldScrollIntoView]);
  return (
    <div
      ref={ref}
      className={
        props.isCurrentUserAuthor
          ? "message-wrapper-reverse"
          : "message-wrapper"
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
};
