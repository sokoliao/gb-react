import { Action } from "redux";
import {
  catchError,
  filter,
  map,
  mergeMap,
  Observable,
  of,
  zip,
  from,
} from "rxjs";
import { Chat, createChat } from "../../model/chat";
import { addChat, addChatError, noopChatAction } from "./chatSlice";
import { database } from "../../app/firebase";
import { ref, set } from "firebase/database";

const setChat = (chat: Chat) => {
  return set(ref(database, `chats/${chat.id}`), chat);
};

const setChatOwner = (chat: Chat) => {
  return set(ref(database, `participants/${chat.id}`), "USER_NAME");
};

export const createChatEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(addChat.match),
    map((action) => createChat(action.payload.name)),
    mergeMap((chat) =>
      zip(from(setChat(chat)), from(setChatOwner(chat))).pipe(
        map((_) => noopChatAction("create")),
        catchError((error) =>
          of(
            addChatError({
              code: error.code,
              message: error.message,
            })
          )
        )
      )
    )
  );
