import _ from "lodash";
import React, { useEffect, useRef } from "react";
import { Message } from "../model/message";
import { currentUser } from "../model/user";

export const useFocusNewMessage = (messages: Message[]): [React.RefObject<HTMLInputElement>] => {
  const newMessageInputRef = useRef<HTMLInputElement>(null);
  useEffect(() => {
    if (_.last(messages)?.user !== currentUser) {
      return;
    }
    newMessageInputRef.current?.focus();
  }, [messages]);
  return [newMessageInputRef];
};
