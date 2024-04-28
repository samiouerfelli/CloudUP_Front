/* tslint:disable */
/* eslint-disable */
export interface RegistrationRequest {
  email: string;
  motDePasse: string;
  nom: string;
  phoneNumber: string;
  prenom: string;
  roles?: 'Professor' | 'Student' | 'Club' | 'Admin';
}
