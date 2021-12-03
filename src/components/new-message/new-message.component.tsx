import React, { useState } from "react";
import { Message, createMessage } from "../../model/message";
import { User } from "../../model/user";
import sendIcon from "./paper-plane-solid.svg";
import "./new-message.css";
import { Button, Form, Image } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";

interface NewMessageProps {
  user: User;
  onSubmitNewMessage: (message: Message) => void;
}

const DEFAULT_VALUE = "";

export const NewMessageComponent = React.forwardRef<
  HTMLInputElement,
  NewMessageProps
>((props, ref) => {
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
    <Form onSubmit={resetAndSubmit} className="d-flex">
      <Form.Group className="m-3 flex-grow-1">
        <Form.Control
          ref={ref}
          type="text"
          placeholder="Message"
          onChange={setMessageText}
          value={text}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" className="m-3">
        <FontAwesomeIcon
          className="new-message-submit-image"
          icon={faPaperPlane}
        />
      </Button>
    </Form>
  );
});
