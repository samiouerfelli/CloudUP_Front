export enum categories {
  CIVIL_ENGINEERING = 'CIVIL_ENGINEERING',
  SOFTWARE_ENGINEERING = 'SOFTWARE_ENGINEERING',
  ELECTRICAL_ENGINEERING = 'ELECTRICAL_ENGINEERING',
  MATERIAL_SCIENCE = 'MATERIAL_SCIENCE',
  ELECTRONICS = 'ELECTRONICS',
  ROBOTICS = 'ROBOTICS',
  EMBEDDED_SYSTEMS = 'EMBEDDED_SYSTEMS',
  RENEWABLE_ENERGY = 'RENEWABLE_ENERGY',
  ARTIFICIAL_INTELLIGENCE = 'ARTIFICIAL_INTELLIGENCE',
  STUDY_TIPS = 'STUDY_TIPS',
  UNIVERSITY_DETAILS = 'UNIVERSITY_DETAILS',
  COURSE_DETAILS = 'COURSE_DETAILS'
}

export interface Publication {
  categories: categories;
  closed: string;
  commentaries: any[];
  content: string;
  datePub: Date;
  idpub: number;
  nbr_com: number;
  nbr_vue: number;
  subject: string;
  tags: string;
  username: string;
  image: string;
}

