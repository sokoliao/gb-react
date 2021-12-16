import React, { useContext, useState } from "react";
import "./new-message.css";
import { Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPaperPlane } from "@fortawesome/free-solid-svg-icons";
import { User } from "../../../../model/user";
import { createMessage, Message } from "../../../../model/message";
import { ColorThemeContext } from "../../../../common/color-theme/color-theme";

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
  const theme = useContext(ColorThemeContext);
  return (
    <Form onSubmit={resetAndSubmit} className="d-flex m-2">
      <Form.Group className="m-3 flex-grow-1">
        <Form.Control
          ref={ref}
          type="text"
          className={`${theme.background} ${theme.text}`}
          placeholder="Message"
          onChange={setMessageText}
          value={text}
        ></Form.Control>
      </Form.Group>
      <Button type="submit" className="m-3" variant={theme.button}>
        <FontAwesomeIcon
          className="new-message-submit-image"
          icon={faPaperPlane}
        />
      </Button>
    </Form>
  );
});
