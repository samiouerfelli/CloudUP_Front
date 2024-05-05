/* tslint:disable */
/* eslint-disable */
import { CoursResponse } from '../models/cours-response';
export interface PageResponseCoursResponse {
  content?: Array<CoursResponse>;
  first?: boolean;
  last?: boolean;
  number?: number;
  size?: number;
  totalElements?: number;
  totalPages?: number;
}
