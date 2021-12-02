import { useChatbot } from "../../hooks/use-chatbot.hook";
import { useFocusNewMessage } from "../../hooks/use-focus-new-message.hook";
import { useMessages } from "../../hooks/use-messages.hook";
import { currentUser } from "../../model/user";
import { MessageListComponent } from "../message-list/message-list.component";
import { NewMessageComponent } from "../new-message/new-message.component";
import "./chat.css";

interface ChatProps {
  className?: string;
}

export const ChatComponent: React.FC<ChatProps> = (props) => {
  const [messages, addMessage] = useMessages();
  const [newMessageEditRef] = useFocusNewMessage(messages);
  useChatbot(messages, addMessage);
  return (
    <div className={`chat-wrapper ${props.className}`}>
      <MessageListComponent
        messages={messages}
        currentUser={currentUser}
      ></MessageListComponent>
      <NewMessageComponent
        ref={newMessageEditRef}
        user={currentUser}
        onSubmitNewMessage={addMessage}
      ></NewMessageComponent>
    </div>
  );
};
