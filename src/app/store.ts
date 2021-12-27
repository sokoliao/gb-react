import { AnyAction, configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { Observable } from "rxjs";
import { chatsEpic } from "../features/chat/chatEpic";
import { chatSlice } from "../features/chat/chatSlice";
import { signUpEpic } from "../features/profile/profileEpic";
import { profileSlice } from "../features/profile/profileSlice";
import { signInEpic } from "../features/profile/signInEpic";
import { signOutEpic } from "../features/profile/signOutEpic";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    chats: chatSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

const rootEpic = combineEpics<AnyAction>(
  chatsEpic,
  signUpEpic,
  signInEpic,
  signOutEpic
);
epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
