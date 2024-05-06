/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
export interface User {
  aboutMe?: string;
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  city?: string;
  codePostal?: number;
  college?: 'ESB' | 'ESPRIT';
  country?: string;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  dateOfBirth?: string;
  degree?: 'CLASS_1ERE' | 'CLASS_2EME' | 'CLASS_3EME' | 'CLASS_4EME' | 'CLASS_5EME';
  email?: string;
  enabled?: boolean;
  gender?: 'Male' | 'Female';
  idUser?: number;
  image?: string;
  lastModifiedDate?: string;
  membership?: string;
  motDePasse?: string;
  name?: string;
  nom?: string;
  option?: 'ARCTIC' | 'DS' | 'SE' | 'TWIN' | 'GL' | 'SIM' | 'NIDS' | 'SLEAM' | 'INFINI' | 'ERP_BI' | 'GAMIX';
  password?: string;
  phoneNumber: string;
  prenom?: string;
  roles?: 'Professor' | 'Student' | 'Club' | 'Admin';
  username?: string;
}
