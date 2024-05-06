import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {User} from '../../../services/models/user';
import {UpdateRequest} from '../../../services/models/update-request';
import {Router} from '@angular/router';

@Component({
  selector: 'app-update-account',
  templateUrl: './update-account.component.html',
  styleUrls: ['./update-account.component.css']
})
export class UpdateAccountComponent implements OnInit {
  public showNameDropdown = false;
  user!: User;
  errorMsg: Array<string> = [];
  updateUser: UpdateRequest = {
    nom: '',
    prenom: '',
    phoneNumber: '',
    gender: 'Female',
    dateOfBirth: '',
    aboutMe: '',
    city: '',
    country: '',
    codePostal: 0,
    college: 'ESPRIT',
    degree: 'CLASS_1ERE',
    option: 'DS',
    membership: ''
  };
  selectedUserCover!: Blob;
  selectedPicture: string | undefined;
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthentificationService) {
    this.updateDropdownVisibility();
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
this.authService.getUser().subscribe({
  next: value => {
    this.user = value;
    if (this.user.prenom != null && this.user.nom != null ) {
      this.updateUser.prenom = this.user.prenom;
      this.updateUser.nom = this.user.nom;
      this.updateUser.phoneNumber = this.user.phoneNumber;
      this.updateUser.dateOfBirth = this.user.dateOfBirth;
      this.updateUser.aboutMe = this.user.aboutMe;
      this.updateUser.gender = this.user.gender;
      this.updateUser.college = this.user.college;
      this.updateUser.city = this.user.city;
      this.updateUser.country = this.user.country;
      this.updateUser.codePostal = this.user.codePostal;
      this.updateUser.degree = this.user.degree;
      this.updateUser.option = this.user.option;
      this.updateUser.membership = this.user.membership;
      const id = this.user.idUser as number ;
      this.authService.findUserById({idUser: id}).subscribe({
        next: (data) =>
        {
          this.selectedPicture = 'data:image/jpg;base64,' + data.image ;
        }
      });

    }
  },
  // tslint:disable-next-line:typedef
  error(err){
    console.log(err);
  }
  });
  }
  // tslint:disable-next-line:typedef
  onSubmit(): void {
    this.errorMsg = [];
    this.authService.updateUser({body: this.updateUser} ).subscribe({
      next: () => {
        if (this.selectedUserCover){
        this.authService.uploadUserPhoto({body: {file: this.selectedUserCover},
        }).subscribe({
          next: () => {
            this.router.navigate(['']);  // Replace 'URL' with the actual path you want to navigate to
          },
          error: (err) => {
            console.error(err);
          }
        });
      }
        this.router.navigate(['']);
        },
      error: (err) => {
        console.error(err);
      }
    });
  }

  // tslint:disable-next-line:typedef


  updateDropdownVisibility(): void {
    this.showNameDropdown = this.updateUser.college === 'ESPRIT' && (this.updateUser.degree === 'CLASS_4EME' || this.updateUser.degree === 'CLASS_5EME');
  }


  onFileSelected(event: any): void {
    // The 'files' property is an array-like object which holds all the selected files.
    this.selectedUserCover = event.target.files[0];  // Access the first file

    console.log(this.selectedUserCover);

    if (this.selectedUserCover) {
      const reader: FileReader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedUserCover);
    }
  }

}
