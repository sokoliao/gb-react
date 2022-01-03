import {
  AnyAction,
  CombinedState,
  combineReducers,
  configureStore,
} from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { Reducer } from "typesafe-actions";
import { addMessageEpic } from "../features/chat/addMessageEpic";
import { chatbotEpic } from "../features/chat/chatbotEpic";
import { chatSlice } from "../features/chat/chatSlice";
import { addChatEpic } from "../features/chat/addChatEpic";
import { chatListenerEpic } from "../features/chat/chatListenerEpic";
import { messageListenerEpic } from "../features/chat/messageListenerEpic";
import { messageSlice } from "../features/chat/messageSlice";
import { signUpEpic } from "../features/profile/profileEpic";
import { profileSlice } from "../features/profile/profileSlice";
import { signInEpic } from "../features/profile/signInEpic";
import { signOutEpic } from "../features/profile/signOutEpic";

const combinedReducer = combineReducers({
  profile: profileSlice.reducer,
  chats: chatSlice.reducer,
  messages: messageSlice.reducer,
});

function getState<TState>(
  r: Reducer<CombinedState<TState>, AnyAction>
): () => TState {
  return () => undefined as unknown as TState;
}
const g = getState(combinedReducer);
export type RootState = ReturnType<typeof g>;

const epicMiddleware = createEpicMiddleware<AnyAction, AnyAction, RootState>();

export const store = configureStore({
  reducer: combinedReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

const rootEpic = combineEpics<AnyAction, AnyAction, RootState>(
  chatbotEpic,
  signUpEpic,
  signInEpic,
  signOutEpic,
  addChatEpic,
  chatListenerEpic,
  messageListenerEpic,
  addMessageEpic
);
epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
