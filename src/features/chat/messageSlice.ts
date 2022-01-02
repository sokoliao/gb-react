import { createAction, createSlice } from "@reduxjs/toolkit";
import { Error } from "../../model/error";
import { Message } from "../../model/message";
import { NewMessage } from "./new-message";

export const addMessage = createAction<NewMessage>("messages/add");
export const addMessageSuccess = createAction<Message>("messages/add-success");
export const addMessageError = createAction<Error>("messages/add-error");

export const updateMessage = createAction<Message>("messages/update");
export const updateMessageSuccess = createAction<Message>(
  "messages/update-success"
);
export const updateMessageError = createAction<Error>("message/update-error");

export interface DeleteMessagePayload {
  chatId: string;
  messageId: string;
}
export const deleteMessage =
  createAction<DeleteMessagePayload>("messages/delete");
export const deleteMessageSuccess = createAction<DeleteMessagePayload>(
  "messages/delete-success"
);
export const deleteMessageError = createAction<Error>("messages/delete-error");

export const noopMessageAction = createAction<string>("messages/noop");

interface MessageSliceState {
  [chatId: string]: {
    [messageId: string]: Message;
  };
}
const initialState: MessageSliceState = {};
export const messageSlice = createSlice({
  name: "messages",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(addMessageSuccess, (state, action) => {
      const message = action.payload;
      if (!state[message.chatId]) {
        state[message.chatId] = {};
      }
      state[message.chatId][message.id] = message;
    });
    builder.addCase(updateMessageSuccess, (state, action) => {
      const message = action.payload;
      if (!state[message.chatId]) {
        state[message.chatId] = {};
      }
      state[message.chatId][message.id] = message;
    });
    builder.addCase(deleteMessageSuccess, (state, action) => {
      delete state[action.payload.chatId][action.payload.messageId];
    });
  },
});
