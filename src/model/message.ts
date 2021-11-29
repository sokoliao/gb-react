import {v4 as uuidv4} from 'uuid';
import { User } from './user';

export interface Message {
  id: string;
  user: User;
  text: string;
  timestamp: number;
}

export const createMessage = (user: User, text: string): Message => { 
  return {
    id: uuidv4(),
    user: user,
    text: text,
    timestamp: Math.floor((new Date()).getTime() / 1000)
  };
}
