import _ from "lodash";
import { useEffect } from "react";
import { createMessage, Message } from "../model/message";
import { User } from "../model/user";

export const useChatbot = (botUser: User, messages: Message[], addMessage: (newMessage: Message) => void) => useEffect(() => {
    const timer = setTimeout(() => {
      if (_.isEmpty(messages) || _.last(messages)?.user === botUser) {
        return;
      }
      addMessage(createMessage(botUser, "WE ARE BORG"));
    }, 1500);
    return () => clearTimeout(timer);
  }, [botUser, addMessage, messages]);