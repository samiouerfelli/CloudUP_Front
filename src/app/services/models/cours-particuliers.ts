/* tslint:disable */
/* eslint-disable */
import { User } from '../models/user';
export interface CoursParticuliers {
  descriptionCours?: string;
  dureeC?: number;
  idCours?: number;
  niveau?: 'LEVEL_1A' | 'LEVEL_2A' | 'LEVEL_3A' | 'LEVEL_3B' | 'LEVEL_4EME' | 'LEVEL_5EME';
  nomCours?: string;
  option?: 'ARCTIC' | 'GAMIX' | 'GL' | 'INFINI' | 'ERP_BI' | 'DS' | 'SIM' | 'TWIN' | 'SLEAM' | 'NIDS' | 'SE';
  price?: number;
  professeur?: User;
  type?: 'En_Ligne' | 'En_Pr\xE9sentiel';
}
