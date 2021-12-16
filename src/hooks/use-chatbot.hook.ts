import _ from "lodash";
import { useEffect } from "react";
import { createMessage, Message } from "../model/message";
import { bot } from "../model/user";

export const useChatbot = (messages: Message[], addMessage: (newMessage: Message) => void) => useEffect(() => {
    const timer = setTimeout(() => {
      if (_.isEmpty(messages) || _.last(messages)?.user === bot) {
        return;
      }
      addMessage(createMessage(bot, "WE ARE BORG"));
    }, 1500);
    return () => clearTimeout(timer);
  }, [addMessage, messages]);