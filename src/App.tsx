import React, { useEffect, useState } from "react";
import "./App.css";
import { MessageComponent } from "./message.component";
import { createMessage, Message } from "./model/message";
import { currentUser, bot } from "./model/user";
import { NewMessageComponent } from "./new-message.component";
import _ from "lodash";

const App: React.FC<{}> = () => {
  const [messages, setMessages] = useState<Message[]>([]);
  const addMessage = (newMessage: Message) => {
    setMessages((currentMessages) => [...currentMessages, newMessage]);
  };
  useEffect(() => {
    const timer = setTimeout(() => {
      if (_.isEmpty(messages) || _.last(messages)?.user === bot) {
        return;
      }
      addMessage(createMessage(bot, "WE ARE BORG"));
    }, 2000);
    return () => clearTimeout(timer);
  }, [messages]);
  return (
    <div className="app-wrapper">
      <div className="message-list">
        {messages.map((message) => (
          <MessageComponent
            key={message.id}
            message={message}
            isCurrentUserAuthor={message.user === currentUser}
          ></MessageComponent>
        ))}
      </div>
      <NewMessageComponent
        user={currentUser}
        onSubmitNewMessage={addMessage}
      ></NewMessageComponent>
    </div>
  );
};

export default App;
