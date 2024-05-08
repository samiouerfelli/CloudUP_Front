import {Component, OnInit, Output} from '@angular/core';
import { FormBuilder, FormGroup, FormArray, Validators } from '@angular/forms';
import {AuthentificationService} from '../../../services/services/authentification.service';
import {User} from '../../../services/models/user';
import {UpdateRequest} from '../../../services/models/update-request';
import {Router} from '@angular/router';
import {LoginService} from '../login/login.service';
declare var $: any;
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
  selectedPicture!: string | undefined;
  adresse!: boolean;
  constructor(private fb: FormBuilder,
              private router: Router,
              private authService: AuthentificationService,
              private dataService: LoginService) {
    this.updateDropdownVisibility();
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
this.authService.getUser().subscribe({
  next: value => {
    this.user = value;
    this.adresse = this.verifyAdress();
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
 this.authService.sendUpdateConfirmationSms().subscribe({
      next: () => {
        this.openModal();
      },
      error: (err) => {
      console.log(err);
      }});
  }
  // tslint:disable-next-line:typedef


updateDropdownVisibility(): void {
    this.showNameDropdown = this.updateUser.college === 'ESPRIT' && (this.updateUser.degree === 'CLASS_4EME' || this.updateUser.degree === 'CLASS_5EME');
  }


  onFileSelected(event: any): void {
    this.selectedUserCover = event.target.files[0];
    this.dataService.updateImage(this.selectedUserCover);
    console.log(this.selectedUserCover);
    if (this.selectedUserCover) {
      const reader: FileReader = new FileReader();
      reader.onload = () => {
        this.selectedPicture = reader.result as string;
      };
      reader.readAsDataURL(this.selectedUserCover);
    }
  }
  // tslint:disable-next-line:typedef
  verifyAdress(){
    return (this.user.country != null && this.user.city != null && this.user.codePostal !== 0);
  }
  openModal(): void {
    $('#Update-account').modal('show');
  }
  // tslint:disable-next-line:typedef
  sendData() {
    const data = this.updateUser;
    this.dataService.updateData(data);
  }
}
