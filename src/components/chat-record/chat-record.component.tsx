import { useContext } from "react";
import { Nav, Image, Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import { ColorThemeContext } from "../../App";
import { Chat } from "../../model/chat";
import "./chat-record.css";

interface ChatRecordProps {
  record: Chat;
}

export const ChatRecordComponent: React.FC<ChatRecordProps> = (props) => {
  const theme = useContext(ColorThemeContext);
  return (
    <Link
      to={`${props.record.id}`}
      className="align-items-stretch chat-record-wrapper d-flex flex-row nav-link"
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
    </Link>
  );
};
