import { Component, OnInit } from '@angular/core';
import { CollaborationReservationService } from "../collaborationservice/collabReservationservice/collabreservation.service";
import {HttpClient, HttpErrorResponse} from "@angular/common/http";
import {Partenaire} from "../collaborationadmin/collaborationadmin.component";
import {Observable} from "rxjs";
import {AuthentificationService} from "../services/services/authentification.service";
import {User} from "../services/models/user";
import Swal from "sweetalert2";

@Component({
  selector: 'app-collaborationresssss',
  templateUrl: './collaborationresssss.component.html',
  styleUrls: ['./collaborationresssss.component.css']
})


export class CollaborationresssssComponent implements OnInit {
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
    this.getReservationCollaborationByuserId();
  }

  getReservationCollaborationByuserId()  {
    this.getIDUSER(this.token).subscribe(
      (idu: number) => {
        this.collabreservationService.getReservationCollaborationByuserId(idu).subscribe(
          (resultData: any) => {
            this.ResArray = resultData;
            console.log('Data fetched mte3current user:', resultData);
          },
          (error: any) => {
            console.error('Error fetching data:', error);
          }
        );
      },
      (error: any) => {
        console.error('Error getting user ID:', error);
      }
    );
  }
  getIDUSER(token: any): Observable<number> {
    return this.collabreservationService.getIDFromToken(token);

  }
  addReservationCollaboration(userId: number, collaborationId: number) {

    this.getIDUSER(this.token).subscribe(
      (idu: number) => {

        this.collabreservationService.addReservationCollaboration(idu, collaborationId)
          .subscribe(data => {

            console.log('Reservation collaboration added mte3id:', data);

            this.getReservationCollaborationByuserId();
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


    deleteCol(userId: number) {
        this.getIDUSER(this.token).subscribe(
            (idu: number) => {
                this.collabreservationService.deleteReservationCollaboration(userId)
                    .subscribe(
                        (response: any) => {
                            Swal.fire({
                                icon: 'success',
                                title: 'supprimer effectue', // Success message for successful deletion
                                showConfirmButton: false,
                                timer: 500
                            });
                            this.getReservationCollaborationByuserId(); // Refresh the user list after deletion
                        },
                        (error: HttpErrorResponse) =>
                            alert(error.message)
                    );
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

