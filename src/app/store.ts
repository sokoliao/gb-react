import { configureStore } from "@reduxjs/toolkit";
import { combineEpics, createEpicMiddleware } from "redux-observable";
import { chatsEpic } from "../features/chat/chatEpic";
import { chatSlice } from "../features/chat/chatSlice";
import { profileSlice } from "../features/profile/profileSlice";

const epicMiddleware = createEpicMiddleware();

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    chats: chatSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(epicMiddleware),
});

const rootEpic = combineEpics(chatsEpic);
epicMiddleware.run(rootEpic);

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
