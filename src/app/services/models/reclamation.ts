/* tslint:disable */
/* eslint-disable */
export interface Reclamation {
  archive?: boolean;
  description?: string;
  id?: number;
  objet?: string;
  time?: string;
  traite?: 'EnAttente' | 'EnCours' | 'Resolue';
  type?: 'Cours' | 'Utilisateur' | 'Evenement' | 'Business';
}
