/* tslint:disable */
/* eslint-disable */
import { GrantedAuthority } from '../models/granted-authority';
import { Reservation } from '../models/reservation';
import { TimeSlot } from '../models/time-slot';
export interface User {
  accountLocked?: boolean;
  accountNonExpired?: boolean;
  accountNonLocked?: boolean;
  authorities?: Array<GrantedAuthority>;
  availableTimeSlots?: Array<TimeSlot>;
  createdDate?: string;
  credentialsNonExpired?: boolean;
  email: string;
  enabled?: boolean;
  idUser?: number;
  lastModifiedDate?: string;
  motDePasse?: string;
  name?: string;
  nom?: string;
  password?: string;
  phoneNumber: string;
  prenom?: string;
  reservations?: Array<Reservation>;
  roles?: 'Professor' | 'Student' | 'Club' | 'Admin';
  username?: string;
}
