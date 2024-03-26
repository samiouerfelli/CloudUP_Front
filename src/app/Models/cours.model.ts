import {User} from './user.model';

export interface Cours {
  idCours: number;
  niveau: Niveau;
  option: Spécialité;
  nomCours: string;
  descriptionCours: string;
  type: Modularité;
  price: number;
  dureeC: number;
  professeur: User;
}
export enum Niveau {
  LEVEL_1A = 'LEVEL_1A',
  LEVEL_2A = 'LEVEL_2A',
  LEVEL_3A = 'LEVEL_3A',
  LEVEL_3B = 'LEVEL_3B',
  LEVEL_4EME = 'LEVEL_4EME',
  LEVEL_5EME = 'LEVEL_5EME',
}

export enum Spécialité {
  ARCTIC = 'ARCTIC',
  GAMIX = 'GAMIX',
  GL = 'GL',
  INFINI = 'INFINI',
  ERP_BI = ' ERP_BI',
  DS = 'DS',
  SIM = 'SIM ',
  TWIN = 'TWIN',
  SLEAM = 'SLEAM ',
  NIDS = 'NIDS',
  SE = 'SE '
}

export enum Modularité {
  Online = 'Online',
  En_Présentiel = 'Présentiel'
}
