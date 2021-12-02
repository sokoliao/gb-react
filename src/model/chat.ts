import { v4 as uuidv4 } from 'uuid';
export interface Chat {
  id: string;
  name: string;
  logoUrl: string;
}

export const chats: Chat[] = [
  {
    id: uuidv4(),
    name: "Cat facts",
    logoUrl: "/gb-react/comments-solid.svg",
  },
  {
    id: uuidv4(),
    name: "freeCodeCamp222222222222222",
    logoUrl: "/gb-react/comments-solid.svg",
  },
  {
    id: uuidv4(),
    name: "Buy & Sell",
    logoUrl: "/gb-react/comments-solid.svg",
  }
];
