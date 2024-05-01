import {Cours} from './cours';
import {User} from '../user';

export interface Reservation {
  idR: number;
  dateR: Date;
  statusR: Etat;
  professeur: User;
  etudiant: User;
  cours: Cours;
}
export enum Etat {
  Confirmed = 'Confirmed',
  Pending= 'Pending',
  Canceled= 'Canceled'
}
