/* tslint:disable */
/* eslint-disable */
import { CoursParticuliers } from '../models/cours-particuliers';
import { User } from '../models/user';
export interface Reservation {
  cours?: CoursParticuliers;
  dateR?: string;
  etudiant?: User;
  idR?: number;
  professeur?: User;
  statusR?: 'Confirmed' | 'Pending' | 'Canceled';
}
