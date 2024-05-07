/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface Reactions {
  id?: number;
  reactionType?: 'LIKE' | 'LOVE' | 'SUPPORT' | 'ANGRY' | 'SAD';
  user?: User;
}
