import { ref, set } from "@firebase/database";
import { Action } from "redux";
import { catchError, filter, from, map, mergeMap, Observable, of } from "rxjs";
import { database } from "../../app/firebase";
import { Message } from "../../model/message";
import {
  addMessage,
  addMessageError,
  addMessageSuccess,
  noopMessageAction,
} from "./messageSlice";

const setMessage = (message: Message) => {
  return set(
    ref(database, `messages/${message.chatId}/${message.id}`),
    message
  );
};

export const addMessageEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(addMessage.match),
    mergeMap(({ payload }) =>
      from(setMessage(payload.message)).pipe(
        // map((_) => addMessageSuccess(payload.message)),
        map((_) => noopMessageAction("create")),
        catchError((e) =>
          of(
            addMessageError({
              code: e.code,
              message: e.message,
            })
          )
        )
      )
    )
  );
