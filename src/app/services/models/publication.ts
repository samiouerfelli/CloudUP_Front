/* tslint:disable */
/* eslint-disable */
import { Forum } from '../models/forum';
export interface Publication {
  categories?: 'CIVIL_ENGINEERING' | 'SOFTWARE_ENGINEERING' | 'ELECTRICAL_ENGINEERING' | 'MATERIAL_SCIENCE' | 'ELECTRONICS' | 'ROBOTICS' | 'EMBEDDED_SYSTEMS' | 'RENEWABLE_ENERGY' | 'ARTIFICIAL_INTELLIGENCE' | 'STUDY_TIPS' | 'UNIVERSITY_DETAILS' | 'COURSE_DETAILS';
  closed?: string;
  content?: string;
  datePub?: string;
  forum?: Forum;
  gotMail?: number;
  idpub?: number;
  image?: string;
  nbr_com?: number;
  nbr_vue?: number;
  subject?: string;
  tags?: string;
  username?: string;
}
