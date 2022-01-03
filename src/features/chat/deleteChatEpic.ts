import { Action } from "redux";
import { catchError, filter, from, map, mergeMap, Observable, of } from "rxjs";
import { deleteChat, deleteChatError, noopChatAction } from "./chatSlice";
import { ref, remove } from "firebase/database";
import { database } from "../../app/firebase";

const removeChat = (chatId: string) => remove(ref(database, `chats/${chatId}`));

export const deleteChatEpic = (actions$: Observable<Action>) =>
  actions$.pipe(
    filter(deleteChat.match),
    mergeMap(({ payload }) =>
      from(removeChat(payload)).pipe(
        map((_) => noopChatAction("delete")),
        catchError((e) =>
          of(
            deleteChatError({
              code: e.code,
              message: e.message,
            })
          )
        )
      )
    )
  );
