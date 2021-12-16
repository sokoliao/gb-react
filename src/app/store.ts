import { configureStore } from "@reduxjs/toolkit";
import { chatSlice } from "../features/chat/chatSlice";
import { profileSlice } from "../features/profile/profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
    chats: chatSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;
