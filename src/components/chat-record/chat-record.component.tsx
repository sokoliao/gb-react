import { faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useContext } from "react";
import { Image, Col, Button } from "react-bootstrap";
import { Link, useNavigate } from "react-router-dom";
import { AppStateContext, ColorThemeContext } from "../../App";
import { Chat } from "../../model/chat";
import "./chat-record.css";

interface ChatRecordProps {
  record: Chat;
}

export const ChatRecordComponent: React.FC<ChatRecordProps> = (props) => {
  const theme = useContext(ColorThemeContext);
  const navigate = useNavigate();
  const { deleteChat } = useContext(AppStateContext);
  const deleteCurrentChat = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    deleteChat(props.record.id);
    navigate("/chats", { replace: true });
  };
  return (
    <Link
      to={`${props.record.id}`}
      className="align-items-center w-100 d-flex flex-row nav-link"
    >
      <Image
        className="chat-record-logo flex-grow-0"
        src={props.record.logoUrl}
      ></Image>
      <Col
        className={`overflow-hidden text-overflow-ellipsis flex-shrink-1 ${theme.text}`}
      >
        {props.record.name}
      </Col>
      <Button onClick={deleteCurrentChat} variant={theme.button}>
        <FontAwesomeIcon icon={faTrashAlt} />
      </Button>
    </Link>
  );
};
