import React from "react";
import "./App.css";
import { MessageComponent } from "./message.component";
import Message from "./model/message";

const messages: Message[] = [
  { text: "Hello World!" },
  { text: "First message" },
  { text: "Third message" },
];

const App: React.FC<{}> = () => {
  return (
    <div className="App">
      {messages.map((message) => (
        <MessageComponent message={message}></MessageComponent>
      ))}
    </div>
  );
};

export default App;
