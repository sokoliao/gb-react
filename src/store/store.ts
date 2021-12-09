import { configureStore } from "@reduxjs/toolkit";
import { profileSlice } from "./profile/profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileSlice.reducer,
  },
});
export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;

