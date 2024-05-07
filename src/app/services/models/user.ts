/* tslint:disable */
/* eslint-disable */
import { Award } from '../models/award';
import { Education } from '../models/education';
import { Speciality } from '../models/speciality';
export interface User {
  aboutMe?: string;
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  awards?: Array<Award>;
  city?: string;
  codePostal?: number;
  college?: 'ESB' | 'ESPRIT';
  country?: string;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  dateOfBirth?: string;
  degree?: 'CLASS_1ERE' | 'CLASS_2EME' | 'CLASS_3EME' | 'CLASS_4EME' | 'CLASS_5EME';
  educations?: Array<Education>;
  email?: string;
  enabled?: boolean;
  gender?: 'Male' | 'Female';
  idUser?: number;
  image?: string;
  lastModifiedDate?: string;
  location?: string;
  membership?: string;
  motDePasse?: string;
  name?: string;
  nbr_com?: number;
  nbr_pub?: number;
  nom?: string;
  option?: 'ARCTIC' | 'DS' | 'SE' | 'TWIN' | 'GL' | 'SIM' | 'NIDS' | 'SLEAM' | 'INFINI' | 'ERP_BI' | 'GAMIX';
  password?: string;
  phoneNumber: string;
  prenom?: string;
  roles?: 'Professor' | 'Student' | 'Club' | 'Admin';
  specialities?: Array<Speciality>;
  username?: string;
}
