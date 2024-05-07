/* tslint:disable */
/* eslint-disable */
import { Message } from '../models/message';
import { User } from '../models/user';
export interface PrivateChat {
  creator?: User;
  id?: number;
  messages?: Array<Message>;
}
