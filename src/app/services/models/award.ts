/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Award {
  id?: number;
  name?: string;
  recievedDate?: string;
  user?: User;
}
