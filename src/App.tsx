import React from "react";
import "./App.css";
import { currentUser } from "./model/user";
import { NewMessageComponent } from "./components/new-message/new-message.component";
import { useChatbot } from "./hooks/use-chatbot.hook";
import { MessageListComponent } from "./components/message-list/message-list.component";
import { useFocusNewMessage } from "./hooks/use-focus-new-message.hook";
import { useMessages } from "./hooks/use-messages.hook";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { chats } from "./model/chat";

const App: React.FC<{}> = () => {
  const [messages, addMessage] = useMessages();
  const [newMessageEditRef] = useFocusNewMessage(messages);
  useChatbot(messages, addMessage);
  return (
    <div className="app-wrapper">
      <div className="chat-list-wrapper">
        <ChatListComponent chats={chats}></ChatListComponent>
      </div>
      <div className="chat-wrapper">
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
    </div>
  );
};

export default App;
