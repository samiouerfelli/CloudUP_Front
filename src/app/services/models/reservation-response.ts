/* tslint:disable */
/* eslint-disable */
export interface ReservationResponse {
  dateR?: string;
  etudiantName?: string;
  idR?: number;
  id_cours?: number;
  id_etudiant?: number;
  id_professeur?: number;
  professeurName?: string;
  nomcours?: string;
  statusR:Etat;
}
export enum Etat {
  Confirmed='Confirmed',
  Pending= 'Pending',
  Canceled= 'Canceled'
}
