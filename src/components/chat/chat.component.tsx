import _ from "lodash";
import { useContext } from "react";
import { Col, Nav } from "react-bootstrap";
import { useParams } from "react-router";
import { useChatbot } from "../../hooks/use-chatbot.hook";
import { useFocusNewMessage } from "../../hooks/use-focus-new-message.hook";
import { useMessages } from "../../hooks/use-messages.hook";
import { currentUser } from "../../model/user";
import { AppStateContext } from "../chats-layout/chats-layout.component";
import { MessageListComponent } from "../message-list/message-list.component";
import { NewMessageComponent } from "../new-message/new-message.component";
import "./chat.css";

interface ChatProps {}

export const ChatComponent: React.FC<ChatProps> = (props) => {
  const { chats, addMessageToChat } = useContext(AppStateContext);
  const routeParams = useParams();
  const chatId = routeParams["chatId"]!;
  const { name, messages } = _.find(chats, (c) => c.id === chatId)!;
  const [newMessageEditRef] = useFocusNewMessage(messages);
  const addMessage = _.curry(addMessageToChat)(chatId);
  useChatbot(messages, addMessage);
  return (
    <Col className="d-flex flex-column align-items-stretch justify-content-end chat-wrapper p-0">
      <Nav className="border-bottom">
        <Nav.Item className="d-flex align-items-center">
          <h2 className="my-2 mx-3">{name}</h2>
        </Nav.Item>
      </Nav>
      <MessageListComponent
        messages={messages}
        currentUser={currentUser}
      ></MessageListComponent>
      <NewMessageComponent
        ref={newMessageEditRef}
        user={currentUser}
        onSubmitNewMessage={addMessage}
      ></NewMessageComponent>
    </Col>
  );
};
