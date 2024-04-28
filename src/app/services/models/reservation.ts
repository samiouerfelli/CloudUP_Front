import {User} from './user';
import {Cours} from './cours';

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
