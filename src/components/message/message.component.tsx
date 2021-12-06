import { Message } from "../../model/message";
import "./message.css";
import moment from "moment";
import { Nav, Image, Col, Row } from "react-bootstrap";
import { useContext } from "react";
import { ColorThemeContext } from "../../App";

interface MessageProps {
  message: Message;
  isCurrentUserAuthor: boolean;
}

export const MessageComponent: React.FC<MessageProps> = (props) => {
  const theme = useContext(ColorThemeContext);
  return (
    <div
      className={`d-flex align-items-end ${
        props.isCurrentUserAuthor && "flex-row-reverse"
      }`}
    >
      <Image
        className="message-logo m-2"
        src={props.message.user.logoUrl}
        alt="logo"
      ></Image>
      <div key={props.message.id} className="message-text">
        <div className={`text-small ${theme.textSecondary}`}>
          {props.message.user.name}
        </div>
        <div>{props.message.text}</div>
        <div
          className={`text-small d-flex justify-content-end ${theme.textSecondary}`}
        >
          {moment(props.message.timestamp).format("h:mm")}
        </div>
      </div>
    </div>
  );
};
