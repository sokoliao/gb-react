import { createAction, createSlice } from "@reduxjs/toolkit";
import _ from "lodash";
import { createChat, initialChats } from "../../model/chat";
import { NewMessage } from "./new-message";

export const addChat = createAction<string>("chats/add");
export const deleteChat = createAction<string>("chats/delete");
export const addMessage = createAction<NewMessage>("messages/add");

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
