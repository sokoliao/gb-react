import { ref } from "firebase/database";
import { Action } from "redux";
import { ListenEvent, QueryChange, stateChanges } from "rxfire/database";
import { filter, map, mergeMap, Observable, takeUntil } from "rxjs";
import { database } from "../../app/firebase";
import { Message } from "../../model/message";
import { addChatSuccess, deleteChat } from "./chatSlice";
import {
  addMessageSuccess,
  deleteMessage,
  noopMessageAction,
  updateMessageSuccess,
} from "./messageSlice";

export const messageListenerEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(addChatSuccess.match),
    mergeMap(({ payload }) =>
      stateChanges(ref(database, `messages/${payload.id}`)).pipe(
        takeUntil(
          actions$.pipe(
            filter(deleteChat.match),
            filter((action) => action.payload === payload.id)
          )
        ),
        map(changeToAction)
      )
    )
  );

const changeToAction = ({ event, snapshot }: QueryChange) => {
  const message = snapshot.val() as Message;
  switch (event) {
    case ListenEvent.added:
      return addMessageSuccess(message);
    case ListenEvent.changed:
      return updateMessageSuccess(message);
    case ListenEvent.moved:
      return noopMessageAction("moved event");
    case ListenEvent.removed:
      return deleteMessage({
        chatId: message.chatId,
        messageId: message.id,
      });
    case ListenEvent.value:
      return noopMessageAction("value event");
  }
};
