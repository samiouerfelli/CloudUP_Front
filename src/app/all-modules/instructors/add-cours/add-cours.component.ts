import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import {Router} from '@angular/router';
import {environment} from '../../../../environments/environment';
import {CoursServiceService} from '../../../Services/cours-service.service';
// @ts-ignore
import {Cours, Niveau} from '../../../Models/cours.model';



@Component({
  selector: 'app-add-cours',
  templateUrl: './add-cours.component.html',
  styleUrls: ['./add-cours.component.css']
})
export class AddCoursComponent implements OnInit {
  public courseForm!: FormGroup;
  public showNameDropdown = environment.showNameDropdown;

  constructor(private fb: FormBuilder, private coursService: CoursServiceService,
              private router: Router) {
  }

  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.courseForm = this.fb.group({
      nomCours: this.fb.control('', [Validators.required, Validators.maxLength(20)]),
      descriptionCours: this.fb.control('', Validators.maxLength(50)),
      niveau: this.fb.control('', Validators.required),
      option: [],
      type: this.fb.control('', Validators.required),
      price: this.fb.control('', [Validators.min(20), Validators.required]),
      dureeC: this.fb.control('', [Validators.required])
    });
    this.onChanges();

  }


  // tslint:disable-next-line:typedef
  saveCourse() {
    const course: Cours = this.courseForm.value;
    this.coursService.saveCourse(course).subscribe({
      next: data => {
        alert('cours ajouté avec succès');
        this.router.navigateByUrl('/instructors/get-course');
      }, error: err => {
        console.log(err);
      }
    });
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

