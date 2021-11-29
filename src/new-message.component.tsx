import React, { useState } from "react";
import { Message, createMessage } from "./model/message";
import { User } from "./model/user";
import sendIcon from "./paper-plane-solid.svg";
import "./new-message.css";

interface NewMessageProps {
  user: User;
  onSubmitNewMessage: (message: Message) => void;
}

const DEFAULT_VALUE = "";

export const NewMessageComponent: React.FC<NewMessageProps> = (props) => {
  const [text, setText] = useState<string>(DEFAULT_VALUE);
  const setMessageText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText((_) => e.target.value);
  };
  const resetAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === DEFAULT_VALUE) return;
    setText((_) => DEFAULT_VALUE);
    props.onSubmitNewMessage(createMessage(props.user, text));
  };
  return (
    <form onSubmit={resetAndSubmit} className="new-message-wrapper">
      <input
        className="new-message-edit"
        type="text"
        placeholder="Message"
        onChange={setMessageText}
        value={text}
      />
      <button type="submit" className="new-message-submit">
        <img src={sendIcon} alt="Send" />
      </button>
    </form>
  );
};
