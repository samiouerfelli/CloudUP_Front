import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {CoursServiceService} from '../../../services/services/CoursReservationServices/cours-service.service';
// @ts-ignore
import {AuthentificationService, CoursControllerService} from 'src/app/services/services';
import {CoursRequest, User} from 'src/app/services/models';
import {Niveau} from '../../../services/models/MyModels/cours';


@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {

  constructor(private fb: FormBuilder, private coursService: CoursServiceService,
              private service: CoursControllerService,
              private authService: AuthentificationService,
              private router: Router) {
  }
  public courseForm!: FormGroup;
  public showNameDropdown = environment.showNameDropdown;
  public user! : User;

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.courseForm = this.fb.group({
      nomCours: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      descriptionCours: this.fb.control('', Validators.maxLength(50)),
      dureeC: this.fb.control('', [Validators.required]),
      price: this.fb.control('', [Validators.min(20), Validators.required]),
      niveau: this.fb.control('', Validators.required),
      option: [],
      type: this.fb.control('', Validators.required)
    });
    this.onChanges();
    this.authService.getUser().subscribe(user => { this.user=user});

  }

  // tslint:disable-next-line:typedef
  saveCourse() {
    const course: CoursRequest = this.courseForm.value;
    const params = {
      body: course
    };
    this.service.saveCours(params).subscribe(
      {
        next: data => {
          alert('cours ajouté avec succès');
          this.router.navigateByUrl('/instructors/get-course');
        }, error: err => {
          console.log(err);
        }

      }
    );
  }

  // tslint:disable-next-line:typedef
  onChanges() {
    // tslint:disable-next-line:no-non-null-assertion
    this.courseForm.get('niveau')!.valueChanges.subscribe(val => {
      this.showNameDropdown = (val === Niveau.LEVEL_4EME || val === Niveau.LEVEL_5EME);
      if (this.showNameDropdown) {
        // tslint:disable-next-line:no-non-null-assertion
        this.courseForm.get('option')!.setValue('');
      }
    });
  }


}

