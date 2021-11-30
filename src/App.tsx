import React from "react";
import "./App.css";
import { currentUser } from "./model/user";
import { NewMessageComponent } from "./components/new-message/new-message.component";
import { useChatbot } from "./hooks/use-chatbot.hook";
import { MessageListComponent } from "./components/message-list/message-list.component";
import { useFocusNewMessage } from "./hooks/use-focus-new-message.hook";
import { useMessages } from "./hooks/use-messages.hook";

const App: React.FC<{}> = () => {
  const [messages, addMessage] = useMessages();
  const [newMessageEditRef] = useFocusNewMessage(messages);
  useChatbot(messages, addMessage);
  return (
    <div className="app-wrapper">
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

export default App;
