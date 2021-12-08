import { v4 as uuidv4 } from 'uuid';
import { Message } from './message';

export interface Chat {
  id: string;
  name: string;
  logoUrl: string;
  messages: Message[];
}

export const createChat = (name: string): Chat => {
  return {
    id: uuidv4(),
    name: name,
    logoUrl: "/gb-react/comments-solid.svg",
    messages: [],
  }
}

export const initialChats: Chat[] = [
  {
    id: uuidv4(),
    name: "Cat facts",
    logoUrl: "/gb-react/comments-solid.svg",
    messages: [],
  },
  {
    id: uuidv4(),
    name: "freeCodeCamp222222222222222",
    logoUrl: "/gb-react/comments-solid.svg",
    messages: [],
  },
  {
    id: uuidv4(),
    name: "Buy & Sell",
    logoUrl: "/gb-react/comments-solid.svg",
    messages: [],
  }
];
