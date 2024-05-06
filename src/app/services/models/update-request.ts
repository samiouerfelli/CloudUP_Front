/* tslint:disable */
/* eslint-disable */
export interface UpdateRequest {
  aboutMe?: string;
  city?: string;
  codePostal?: number;
  college?: 'ESB' | 'ESPRIT';
  country?: string;
  dateOfBirth?: string;
  degree?: 'CLASS_1ERE' | 'CLASS_2EME' | 'CLASS_3EME' | 'CLASS_4EME' | 'CLASS_5EME';
  gender?: 'Male' | 'Female';
  membership?: string;
  nom: string;
  option?: 'ARCTIC' | 'DS' | 'SE' | 'TWIN' | 'GL' | 'SIM' | 'NIDS' | 'SLEAM' | 'INFINI' | 'ERP_BI' | 'GAMIX';
  phoneNumber: string;
  prenom: string;
}
