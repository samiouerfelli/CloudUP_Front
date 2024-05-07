/* tslint:disable */
/* eslint-disable */
import { PageableObject } from '../models/pageable-object';
import { Reclamation } from '../models/reclamation';
import { SortObject } from '../models/sort-object';
export interface PageReclamation {
  content?: Array<Reclamation>;
  empty?: boolean;
  first?: boolean;
  last?: boolean;
  number?: number;
  numberOfElements?: number;
  pageable?: PageableObject;
  size?: number;
  sort?: SortObject;
  totalElements?: number;
  totalPages?: number;
}
