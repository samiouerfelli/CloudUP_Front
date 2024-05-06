import { Component , ElementRef, OnInit, ViewChild } from '@angular/core';
//import { PostService } from '../services/partenaires/partenaires.service';
import { PostService } from '../collaborationservice/partenaires/partenaires.service';
import { HttpClient, HttpErrorResponse, HttpEventType  } from '@angular/common/http';
import Swal from 'sweetalert2';
import { FormsModule } from '@angular/forms';
import { Observable } from 'rxjs';
export class User {
   id_part!: number;
  nom!: string;
  descpart!: string;
  imgpart!: string;
}

@Component({
  selector: 'app-partenairesadmin',
  templateUrl: './partenairesadmin.component.html',
  styleUrls: ['./partenairesadmin.component.css']
})
export class PartenairesadminComponent implements OnInit {
  @ViewChild('fileInput') fileInputRef!: ElementRef<HTMLInputElement>;
  UsersArray: User[] = [];
  isResultLoaded = false;
  selectedUser: any = {}; // Variable to store the selected user for update
  showUpdateForm: boolean = false; // Flag to control the visibility of the update form
  showajoutForm: boolean =  false; // Flag for showing the ajout form
  user: User = { id_part: 0, nom: '', descpart: '', imgpart: '' }; // Provide a default value   selectedFiles?: FileList;
  currentFile?: File;
  public edituser: User =new User();
  //id: number;
  //selectedFile: File;
  selectedFiles: any;
  retrievedImage: any;
  base64Data: any;
  retrieveResonse: any;
  //message: string;
  imageName: any;
  //fileInfos?: Observable<any>;

  constructor(private service: PostService,private httpClient: HttpClient) { }
//il http client nestaamel fiha bech naamel il get w post request
  ngOnInit() {
    this.getAllPosts();
    this.edituser= this.selectedUser.id;
  }

  getAllPosts() {
    this.service.GetAll().subscribe((resultData: any) => {
      this.isResultLoaded = true;
      this.UsersArray = resultData;
    });
  }
  showUpdate(user: any) {
    this.selectedUser = user; // Set the selected user for update
    this.showUpdateForm = true; // Show the update form
  }
  ajoutuser(user: any) {

    this.showajoutForm = true; // Show the update form
  }
  cancelUpdate() {
    this.showUpdateForm = false; // Hide the update form
    this.getAllPosts(); // Refresh the user list
  }
  showAddForm() {
    this.showajoutForm = true;
  }
  cancelAjout() {
    this.showajoutForm = false; // Set showAjoutForm to false to hide the ajout form
  }

  addPartenaire(nom: string, descpart: string): void {
    const fileInput = this.fileInputRef.nativeElement;
    const file = fileInput ? fileInput.files?.[0] : null;

    if (!file) {
      console.error('No file selected');
      return;
    }
    this.showajoutForm = false;
    this.service.addPartenaire(file, nom, descpart).subscribe(
      response => {
        Swal.fire({
          icon: 'success',
          title: 'Partenaire a été ajouté avec succès!',
          showConfirmButton: false,
          timer: 1000 // Show the success message for 3 seconds
        }).then(() => {
          console.log(response);
          setTimeout(() => {
            location.reload(); // Reload the page after 3 seconds
          }, 500); // Wait for 3 seconds before reloading
        });
      },
      error => {
        console.error('Error adding partenaire:', error);
        // Handle error response here
      }
    );
  }

  deleteUser(userId: number) {
    this.service.Deletepart(userId)
      .subscribe(
        (response: any) => {
          Swal.fire({
            icon: 'success',
            title: 'ce compte a été supprimer', // Success message for successful deletion
            showConfirmButton: false,
            timer: 1500
          });
          this.getAllPosts(); // Refresh the user list after deletion
        },
        (error: HttpErrorResponse) =>
          alert(error.message)

      );
      location.reload(); // Reload the page after successful submission


  }
  ajoutPart(partenaires: any) {
    this.service.ajoutPart(partenaires)
      .subscribe({
        next: (resultData: any) => {
          Swal.fire({
            icon: 'success',
            title: 'Partenaire ajouté avec succès!',
            showConfirmButton: false,
            timer: 1500 // Show the success message for 3 seconds
          }).then(() => {
            console.log(resultData);
            setTimeout(() => {
              location.reload(); // Reload the page after 3 seconds
            }, 1500); // Wait for 3 seconds before reloading
          });
        }
      });
  }


  updatePart(user: any, id: number) {
    if (!user || !id) {
      console.error('User or id is undefined');
      return;
    }

    const partenaires = {
      nom: user.nom,
      descpart: user.descpart,
      imgpart: this.selectedFiles // Assuming you have a selectedFile variable for the image
    };

    this.service.updatePart(partenaires, id).subscribe({
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

  selectFile(event: any): void {
    this.selectedFiles = event.target.files;
  }


 



///////////////////////////partie image///////////////////////////////////
 
///////////////////////////partie image///////////////////////////////////























}
