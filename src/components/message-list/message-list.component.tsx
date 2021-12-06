import { useEffect, useRef } from "react";
import { Stack } from "react-bootstrap";
import { Message } from "../../model/message";
import { User } from "../../model/user";
import { MessageComponent } from "../message/message.component";

interface MessageListProps {
  messages: Message[];
  currentUser: User;
}

export const MessageListComponent: React.FC<MessageListProps> = (props) => {
  const ref = useRef<HTMLDivElement>(null);
  useEffect(() => {
    if (ref.current) {
      const scrollTo = ref.current.scrollHeight - ref.current.clientHeight;
      ref.current.scrollTop = scrollTo;
    }
  }, [props.messages]);
  return (
    <Stack className="flex-grow-0 overflow-scroll" ref={ref}>
      {props.messages.map((message) => (
        <MessageComponent
          key={message.id}
          message={message}
          isCurrentUserAuthor={message.user === props.currentUser}
        ></MessageComponent>
      ))}
    </Stack>
  );
};
