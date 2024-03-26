export interface User{
  idUser: number;
  nom: string;
  prenom: string;
  email: string;
  motDePasse: string;
  roles: Role;
}
enum Role {
  Professor= 'Professor',
  Student= 'Student',
  Club= 'Club',
  Admin= 'Admin'
}

