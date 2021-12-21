import { createAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { createChat, initialChats } from "../../model/chat";
import { NewMessage } from "./new-message";

export const CHATS_ADD = "chats/add";
export const addChat = createAction<string>(CHATS_ADD);
export const CHATS_DELETE = "chats/delete";
export const deleteChat = createAction<string>(CHATS_DELETE);

export const MESSAGES_ADD = "messages/add";
export const addMessage = createAction<NewMessage>(MESSAGES_ADD);

export const chatSlice = createSlice({
  name: "bla-bla",
  initialState: initialChats,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(
      addChat,
      (state, action) => (state = [createChat(action.payload), ...state])
    );
    builder.addCase(deleteChat, (state, action) =>
      _.filter(state, (c) => c.id !== action.payload)
    );
    builder.addCase(addMessage, (state, action) => {
      const [affected, unaffected] = _.partition(
        state,
        (c) => c.id === action.payload.chatId
      );
      _.forEach(affected, (chat) => chat.messages.push(action.payload.message));
      state = [...affected, ...unaffected];
    });
  },
});
