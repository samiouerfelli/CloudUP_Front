/* tslint:disable */
/* eslint-disable */
import { CategorieEvenement } from '../models/categorie-evenement';
import { Salle } from '../models/salle';
import { User } from '../models/user';
export interface Evenement {
  categorie?: CategorieEvenement;
  dateDebut?: string;
  dateFin?: string;
  description?: string;
  id?: number;
  imgevent?: string;
  lieu?: string;
  maxparticipant?: number;
  nom?: string;
  organisateur?: User;
  participants?: Array<User>;
  reports?: number;
  salle?: Salle;
  type?: 'PRIVATE' | 'PUBLIC';
}
