import { ref } from "firebase/database";
import { database } from "../../app/firebase";
import { map, Observable } from "rxjs";
import { ListenEvent, stateChanges } from "rxfire/database";
import { Action } from "redux";
import { RootState } from "../../app/store";
import {
  addChatSuccess,
  deleteChat,
  noopChatAction,
  updateChat,
} from "./chatSlice";
import { Chat } from "../../model/chat";

export const firebaseChatEpic = (
  actions$: Observable<Action>,
  state$: Observable<RootState>
) =>
  stateChanges(ref(database, "chats")).pipe(
    map((change) => {
      const { event, snapshot } = change;
      const chat = snapshot.val() as Chat;
      switch (event) {
        case ListenEvent.added:
          return addChatSuccess(chat);
        case ListenEvent.changed:
          return updateChat(chat);
        case ListenEvent.moved:
          return noopChatAction("value event");
        case ListenEvent.removed:
          return deleteChat(chat?.id);
        case ListenEvent.value:
          return noopChatAction("value event");
      }
    })
  );
