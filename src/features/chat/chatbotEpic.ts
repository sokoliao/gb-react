import _ from "lodash";
import { Action } from "redux";
import {
  debounceTime,
  filter,
  groupBy,
  map,
  mergeMap,
  Observable,
  withLatestFrom,
} from "rxjs";
import { RootState } from "../../app/store";
import { createMessage } from "../../model/message";
import { bot } from "../../model/user";
import { addMessage, addMessageSuccess } from "./messageSlice";

export const chatbotEpic = (
  action$: Observable<Action>,
  state$: Observable<RootState>
) =>
  action$.pipe(
    filter(addMessageSuccess.match),
    groupBy((a) => a.payload.chatId),
    mergeMap((chat$) =>
      chat$.pipe(
        debounceTime(2000),
        withLatestFrom(state$),
        filter(([m, state]) => {
          const message = _.last(_.values(state.messages[m.payload.chatId]));
          return !!message && message.user.name !== bot.name;
        }),
        map(([m, state]) =>
          addMessage({
            chatId: m.payload.chatId,
            message: createMessage(m.payload.chatId, bot, "WE ARE BORG2"),
          })
        )
      )
    )
  );
