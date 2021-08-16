import { User } from './User';

export interface Message {
  from: User;
  to: User;
  content: string;
  date: Date;
}
