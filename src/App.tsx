import React from "react";
import "./App.css";
import { ChatListComponent } from "./components/chat-list/chat-list.component";
import { chats } from "./model/chat";
import { ChatComponent } from "./components/chat/chat.component";

const App: React.FC<{}> = () => {
  return (
    <div className="app-wrapper">
      <ChatListComponent
        className="chat-list-wrapper-outer"
        chats={chats}
      ></ChatListComponent>
      <ChatComponent className="chat-wrapper-outer"></ChatComponent>
    </div>
  );
};

export default App;
