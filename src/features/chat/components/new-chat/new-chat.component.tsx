import { faPlusCircle } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext, useState } from "react";
import { Button, Form } from "react-bootstrap";
import { ColorThemeContext } from "../../../../common/color-theme/color-theme";

export interface NewChatProps {
  addChat: (name: string) => void;
}

const DEFAULT_VALUE = "";

export const NewChatComponent: React.FC<NewChatProps> = (props) => {
  const [text, setText] = useState<string>(DEFAULT_VALUE);
  const setMessageText = (e: React.ChangeEvent<HTMLInputElement>) => {
    e.preventDefault();
    setText((_) => e.target.value);
  };
  const resetAndSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (text === DEFAULT_VALUE) return;
    setText((_) => DEFAULT_VALUE);
    props.addChat(text);
  };
  const theme = useContext(ColorThemeContext);
  return (
    <Form
      className="d-flex flex-row border-bottom height-4rem align-items-center"
      onSubmit={resetAndSubmit}
    >
      <Form.Group className="m-2">
        <Form.Control
          type="text"
          placeholder="Chat name"
          onChange={setMessageText}
          value={text}
        ></Form.Control>
      </Form.Group>
      <Button
        type="submit"
        className="m-2 height-2dot5rem"
        variant={theme.button}
      >
        <FontAwesomeIcon icon={faPlusCircle} />
      </Button>
    </Form>
  );
};
