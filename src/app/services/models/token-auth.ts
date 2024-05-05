/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface TokenAuth {
  expired?: boolean;
  id?: number;
  revoked?: boolean;
  token?: string;
  tokenType?: 'BEARER';
  user?: User;
}
