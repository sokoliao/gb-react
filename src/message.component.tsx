import Message from "./model/message";

interface MessageProps {
  message: Message;
}

export const MessageComponent: React.FC<MessageProps> = (props) => (
  <div>{props.message.text}</div>
);
