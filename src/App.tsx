import React, { useState } from "react";
import "./App.css";
import { Message } from "./model/message";
import { currentUser, bot } from "./model/user";
import { NewMessageComponent } from "./components/new-message/new-message.component";
import { useChatbot } from "./hooks/use-chatbot.hook";
import { MessageListComponent } from "./components/message-list/message-list.component";

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (newMessage: Message) => {
    setMessages((currentMessages) => [...currentMessages, newMessage]);
  };
  useChatbot(bot, messages, addMessage);
  return (
    <div className="app-wrapper">
      <MessageListComponent
        messages={messages}
        currentUser={currentUser}
      ></MessageListComponent>
      <NewMessageComponent
        user={currentUser}
        onSubmitNewMessage={addMessage}
      ></NewMessageComponent>
    </div>
  );
};

export default App;
