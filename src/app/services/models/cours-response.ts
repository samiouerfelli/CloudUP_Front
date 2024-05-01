/* tslint:disable */
/* eslint-disable */
export interface CoursResponse {
  descriptionCours?: string;
  dureeC?: number;
  idCours: number;
  idUser: number;
  niveau?:Niveau;
  nomCours?: string;
  option?: 'ARCTIC' | 'GAMIX' | 'GL' | 'INFINI' | 'ERP_BI' | 'DS' | 'SIM' | 'TWIN' | 'SLEAM' | 'NIDS' | 'SE';
  price?: number;
  type?: 'En_Ligne' | 'En_Pr\xE9sentiel';
}
export enum Niveau {

  LEVEL_1A='LEVEL_1A' ,
  LEVEL_2A='LEVEL_2A' ,
  LEVEL_3A='LEVEL_3A' ,
  LEVEL_3B='LEVEL_3B' ,
  LEVEL_4EME='LEVEL_4EME' ,
  LEVEL_5EME='LEVEL_5EME'
}