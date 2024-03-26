import {User} from './user.model';
import {Cours} from './cours.model';

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
