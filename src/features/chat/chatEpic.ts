import { Action } from "redux";
import { debounceTime, filter, groupBy, map, mergeMap, Observable } from "rxjs";
import { createMessage } from "../../model/message";
import { bot } from "../../model/user";
import { addMessage } from "./chatSlice";

export const chatsEpic = (action$: Observable<Action>) =>
  action$.pipe(
    filter(addMessage.match),
    filter((a) => a.payload.message.user !== bot),
    groupBy((a) => a.payload.chatId),
    mergeMap((chat$) =>
      chat$.pipe(
        debounceTime(2000),
        map((m) =>
          addMessage({
            chatId: m.payload.chatId,
            message: createMessage(bot, "WE ARE BORG2"),
          })
        )
      )
    )
  );
