import { Component , OnInit } from '@angular/core';

import Swal from 'sweetalert2';
import { HttpErrorResponse } from '@angular/common/http';
import { ViewChild, ElementRef } from '@angular/core';
//import { CollaborationService } from '../services/collaboration/collaboration.service';
import { CollaborationService } from '../collaborationservice/collaboration/collaboration.service';
import * as jspdf from 'jspdf';
import html2canvas from 'html2canvas';
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

export class Partenaire {
  id_part!: number;
  nom!: string;
  descpart!: string;
  imgpart!: string;
}
export class users{
  idUser!: number;
  nom!: string;
}


@Component({
  selector: 'app-collaborationadmin',
  templateUrl: './collaborationadmin.component.html',
  styleUrls: ['./collaborationadmin.component.css']
})
export class CollaborationadminComponent implements OnInit {
  CollaborationArray: Collaboration[] = [];
  usersArray: users[] = [];
  isResultLoaded = false;
  showajoutForm: boolean = false;
  showUpdateForm: boolean = false;
  coursList: any[] = [];
  partenaireList: Partenaire[] = [];
  userList: users[] = [];
  newCollab: Collaboration = new Collaboration();
  selectedFile: File | null = null;
  @ViewChild('fileInput') fileInput!: ElementRef;
  collab: any = { nomcol: '', desccol: '', dattecol: new Date(), placecol: '', prixcol: 1 };
  showForm: boolean = false;
  selectedCollab: any;
  selectedFiles?: FileList;
  currentFile?: File;
  selectedUser: any = {};
  categorieCollaboraiton: any;
  showCollabForm = false;
  currentPage: number = 1;

  pageSize: number = 6;
  totalPages: any;
  displayedCollaborationArray: any;
  collaborationsWithPagination: any;
  page: number=0;
  size: number=4;
  search: string = "";
  pages!:Array<number>
  constructor(private collaborationservice: CollaborationService) { }



  ngOnInit() {
    this.getAllCollaborations();
    this.fetchPartenaireList();
    this.fetchUserList();
    this.newCollab.user_id_user = 1;
    this.collaborationservice.getCategorieCollaboraitonEnumValues().subscribe(
      (enumValues: string[]) => {
        this.categorieCollaboraiton = enumValues;
      },
      (error) => {
        console.error('Error fetching enum values:', error);
      }
    );
  }
  SetPage(i:number)
  {
    this.page=i;
    this.getAllCollaborations();
  }

  openForm(collab: any) {
    this.selectedCollab = collab;
    this.showForm = true;
  }

  generatePDF() {
    const element = document.getElementById('htmlElementId');

    if (!element) {
      console.error('HTML element not found.');
      return;
    }

    html2canvas(element).then((canvas) => {
      const imgData = canvas.toDataURL('image/png');
      const pdf = new jspdf.jsPDF();
      const imgProps = pdf.getImageProperties(imgData);
      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = (imgProps.height * pdfWidth) / imgProps.width;
      pdf.addImage(imgData, 'PNG', 0, 0, pdfWidth, pdfHeight);
      pdf.save('generated.pdf');
    });
  }
  closeForm() {
    this.showForm = false;
  }
  fetchPartenaireList() {
    this.collaborationservice.getPartenaireList().subscribe(
      (data: Partenaire[]) => {
        this.partenaireList = data;
        console.log('Partenaire data fetched successfully:', data);
      },
      (error) => {
        console.error('Error fetching partenaire data:', error);
      }
    );
  }

  fetchUserList() {
    this.collaborationservice.getUserList().subscribe(
      (data: any[]) => {
        this.userList = data;
        console.log('user data fetched successfully:', data);
      },
      (error) => {
        console.error('Error fetching user data:', error);
      }
    );
  }


  onFileSelected(event: any) {
    if (event.target.files.length > 0) {
      this.selectedFile = event.target.files[0];
    }
  }
  getAllCollaborations() {
    this.collaborationservice.GetAllCols().subscribe(
      (resultData: Collaboration[]) => {
        this.isResultLoaded = true;
        this.CollaborationArray = resultData;
        console.log('Data:', this.CollaborationArray);
      },
      (error) => {
        console.error('Error:', error);
      }
    );
  }

  ajoutCollaboration(event: any) {
    this.showajoutForm = true;
    event.preventDefault();
  }

  cancelAjout() {
    this.showajoutForm = false;
  }
  cancelupdate() {
    this.showUpdateForm = false;
  }

  addCollabimg(nomcol: string, desccol: string, datecol: Date, placecol: string, prixcol: number, partenaires_id_part: number, nbrres: number, user_id_user: number): void {
    console.log('Name:', nomcol);
    console.log('Description:', desccol);
    console.log('Type of datecol:', datecol);
    console.log('Place:', placecol);
    console.log('Price:', prixcol);
    console.log('partenaires_id_part:', partenaires_id_part);
    console.log('nbrres:', nbrres);
    console.log('user_id_user:', user_id_user);

    const file = this.fileInput?.nativeElement.files?.[0];
    this.showajoutForm = false; // Hide the form after adding collaboration

    if (file) {
      this.collaborationservice.addColla(file, nomcol, desccol, datecol, placecol, prixcol, partenaires_id_part, nbrres, user_id_user).subscribe(
          response => {
            console.log('file:', file);
            console.log('Name:', nomcol);
            console.log('Description:', desccol);
            console.log('Type of datecol:', datecol);
            console.log('Place:', placecol);
            console.log('Price:', prixcol);
            console.log('partenaires_id_part:', partenaires_id_part);
            console.log('nbrres:', nbrres);
            console.log('user_id_user:', user_id_user);

            console.log('collab added successfully:', response);
            Swal.fire({
              icon: 'success',
              title: 'collab added successfully!',
              showConfirmButton: false,
              timer: 1500
            }).then(() => {
              setTimeout(() => {
                location.reload();}, 1500);
            });
          },
          error => {
            console.error('Error collab:', error);
          }
      );
    } else {
      console.error('No file selected');
    }
  }









  ajoutCol(collaboration: any) {
    this.collaborationservice.ajoutColls(collaboration)
      .subscribe({
        next: (resultData: any) => {
          console.log('Response from backend:', resultData); // Log the response data
          Swal.fire({
            icon: 'success',
            title: 'Partenaire ajouté avec succès!',
            showConfirmButton: false,
            timer: 1500 // Show the success message for 3 seconds
          }).then(() => {
            setTimeout(() => {
               // Reload the page after 3 seconds
            }); // Wait for 3 seconds before reloading
          });
        },
        error: (error) => {
          console.error('Error adding collaboration:', error); // Log any errors
        }
      });
  }



  deleteCol(userId: number) {
    this.collaborationservice.deleteColls(userId)
      .subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'supprimer effectue', // Success message for successful deletion
            showConfirmButton: false,
            timer: 500
          });
          this.getAllCollaborations(); // Refresh the user list after deletion
        },
        (error: HttpErrorResponse) =>
          alert(error.message)
      );
  }


  updatecol(user: any, id: number) {
    if (!user || !id) {
      console.error('User or id is undefined');
      return;
    }

    const collaboration = {
      nomcol: user.nomcol,
      desccol: user.desccol,
      placecol: user.placecol,
      prixcol: user.prixcol,
      partenaires_id_part: user.partenaires_id_part,
      user_iduser: user.user_iduser,
      cours_idcour: user.cours_idcour,
      datecol: user.datecol,
      imgcol: this.selectedFiles,
      nbrres: user.nbrres // Assuming you have a selectedFile variable for the image
    };

    this.collaborationservice.updatecollaboration(collaboration, id).subscribe({
      next: (resultData: any) => {
        Swal.fire({
          icon: 'success',
          title: 'Partenaire a ete modifié avec succés!',
          showConfirmButton: false,
          timer: 1000 // Show the success message for 3 seconds
        }).then(() => {
          console.log(resultData);
          setTimeout(() => {
            location.reload(); // Reload the page after 3 seconds
          }, 500); // Wait for 3 seconds before reloading
        });
      }
    });
  }

  showUpdate(user: any) {
    this.selectedUser = user; // Set the selected user for update
    this.showUpdateForm = true; // Show the update form
  }

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }





}

