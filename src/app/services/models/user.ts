/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { TokenAuth } from '../models/token-auth';
export interface User {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email: string;
  enabled?: boolean;
  idUser?: number;
  lastModifiedDate?: string;
  motDePasse?: string;
  name?: string;
  nom?: string;
  password?: string;
  phoneNumber: string;
  prenom?: string;
  roles?: 'Professor' | 'Student' | 'Club' | 'Admin';
  tokenAuths?: Array<TokenAuth>;
  username?: string;
}