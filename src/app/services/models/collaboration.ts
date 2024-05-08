/* tslint:disable */
/* eslint-disable */
import { Cours } from '../models/cours';
import { Partenaires } from '../models/partenaires';
import { User } from '../models/user';
export interface Collaboration {
  cours?: Cours;
  datecol?: string;
  desccol?: string;
  idcol?: number;
  imgcol?: string;
  nbrres?: number;
  nomcol?: string;
  partenaires?: Partenaires;
  placecol?: string;
  prixcol?: number;
  qrString?: string;
  user?: User;
  voteNegatif?: number;
  votePositif?: number;
}
