import _ from "lodash";
import { Col, Nav } from "react-bootstrap";
import { useSelector } from "react-redux";
import { useParams } from "react-router";
import { useFocusNewMessage } from "../../../../hooks/use-focus-new-message.hook";
import { useMessages } from "../../../../hooks/use-messages.hook";
import { currentUser } from "../../../../model/user";
import { RootState } from "../../../../app/store";
import "./chat.css";
import { MessageListComponent } from "../message-list/message-list.component";
import { NewMessageComponent } from "../new-message/new-message.component";

export const ChatComponent: React.FC<{}> = () => {
  const [chatName, messages, addMessage] = useMessages();
  const [newMessageEditRef] = useFocusNewMessage(messages);
  return (
    <Col className="d-flex flex-column align-items-stretch justify-content-end p-0 h-100">
      <Nav className="border-bottom height-4rem">
        <Nav.Item className="d-flex align-items-center">
          <h2 className="my-2 mx-3">{chatName}</h2>
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

export const ChatGuardComponent: React.FC<{}> = () => {
  const chats = useSelector((state: RootState) => state.chats);
  const chatId = useParams()["chatId"];
  const chat = _.find(chats, (c) => c.id === chatId);
  return (
    <>
      {chat && <ChatComponent />}
      {!chat && <h1>404 - chat not found</h1>}
    </>
  );
};
