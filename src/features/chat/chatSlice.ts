import { createAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { Chat } from "../../model/chat";
import { Error } from "../../model/error";

export interface AddChatPayload {
  name: string;
}
export const addChat = createAction<AddChatPayload>("chats/add");
export const addChatSuccess = createAction<Chat>("chats/add-success");
export const addChatError = createAction<Error>("chats/add-error");

export const deleteChat = createAction<string>("chats/delete");
export const deleteChatSuccess = createAction<string>("chats/delete-success");
export const deleteChatError = createAction<Error>("chats/delete-error");

export const updateChat = createAction<Chat>("chats/update");

export const noopChatAction = createAction<string>("chats/noop");

export type ChatSliceState = Chat[];
const initialState: ChatSliceState = [];
export const chatSlice = createSlice({
  name: "chats",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addChatSuccess,
      (state, action) => (state = [action.payload, ...state])
    );
    builder.addCase(addChatError, (state, action) => {
      console.error(action.payload);
    });
    builder.addCase(deleteChatSuccess, (state, action) =>
      _.filter(state, (c) => c.id !== action.payload)
    );
    builder.addCase(deleteChatError, (_, { payload }) => {
      console.error(payload);
    });
    builder.addCase(updateChat, (state, action) => {
      state[_.findIndex(state, (c) => c.id === action.payload.id)] =
        action.payload;
    });
  },
});
