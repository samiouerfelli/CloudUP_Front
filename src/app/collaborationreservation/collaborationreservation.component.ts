import { Component, OnInit } from '@angular/core';
import { CollaborationReservationService } from "../collaborationservice/collabReservationservice/collabreservation.service";
import { HttpClient } from "@angular/common/http";
import {Partenaire} from "../collaborationadmin/collaborationadmin.component";
import {Observable} from "rxjs";
import {AuthentificationService} from "../services/services/authentification.service";
import {User} from "../services/models/user";

@Component({
  selector: 'app-collaborationreservation',
  templateUrl: './collaborationreservation.component.html',
  styleUrls: ['./collaborationreservation.component.css']
})


export class CollaborationreservationComponent implements OnInit {
  ResArray: reservation_collaboration[] = [];
  isResultLoaded = false;
  userId!: number;
  collaborationId!: number;
  CollaborationArray: Collaboration[] = [];
    newCollab: reservation_collaboration = new reservation_collaboration();
    token = localStorage.getItem('token');
  user! : User;
  constructor(private collabreservationService: CollaborationReservationService, private httpClient: HttpClient,private authservice: AuthentificationService) {}

  ngOnInit(): void {
    this.fetchCollaborationList();
    this.getAllReservationCollaborations();
  }

  getAllReservationCollaborations() {
    this.collabreservationService.getAllReservationCollaborations().subscribe((resultData: any) => {
      this.ResArray = resultData;
      console.log('daaaaaaaaaaaaatttttttttttttt fetching data:', resultData);
      //this.isResultLoaded = true; // Assuming this flag is used for some purpose
    });
  }
    getIDUSER(token: any): Observable<number> {
        return this.collabreservationService.getIDFromToken(token);

    }
    addReservationCollaboration(userId: number, collaborationId: number) {

        this.getIDUSER(this.token).subscribe(
            (idu: number) => {

                this.collabreservationService.addReservationCollaboration(idu, collaborationId)
                    .subscribe(data => {

                        console.log('Reservation collaboration added successfully:', data);

                        this.getAllReservationCollaborations();
                    }, error => {

                        console.error('Error adding reservation collaboration:', error);
                    });
            },
            error => {

                console.error('Error getting user ID:', error);
            }
        );
    }

    fetchCollaborationList() {
        this.collabreservationService.GetAllColsres().subscribe(
            (data: Collaboration[]) => {
                this.CollaborationArray = data;
                console.log('Partenaire data fetched successfully:', data);
            },
            (error) => {
                console.error('Error fetching partenaire data:', error);
            }
        );
    }
}

export class reservation_collaboration {
  id!: number;
  collaboration_id!: number;
  user_id!: number;
  user?: { nom: string,idUser:number | undefined};
  collaboration?: { nomcol: string | undefined };
}
export class Collaboration {

  desccol!: string;
  imgcol!: string;
  nomcol!: string;
  cours?: { nom: string }; // Define the 'cours' property as an object with a 'nom' property
  user?: { nom: string,idUser:number | undefined}; // Define the 'user' property as an object with a 'nom' property
  partenaires?: { nom: string }; // Define the 'partenaires' property as an object with a 'nom' property
  categorie ?:{nom: any}
  partenaires_id_part!: number;
  user_id_user!: number;
  vote_negatif!: number;
  vote_positif!: number;
  datecol!: Date;
  placecol!: string;
  prixcol!: number;
  idcol?: number;
  nbrres!: number;
  categorieCollaboraiton: string[] = [];
}
