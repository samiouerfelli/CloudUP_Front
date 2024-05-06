
/* tslint:disable */
/* eslint-disable */
export interface ReservationRequest {
  dateR?: string;
  idR?: number;
  statusR?:Etat;
}
export enum Etat {
  Confirmed='Confirmed',
  Pending= 'Pending',
  Canceled= 'Canceled'
}
