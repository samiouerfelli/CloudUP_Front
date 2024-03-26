import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {CoursServiceService} from '../../../Services/cours-service.service';
// @ts-ignore
import {Cours} from '../../../Models/cours.model';

// @ts-ignore
@Component({
  selector: 'app-update-cours',
  templateUrl: './update-cours.component.html',
  styleUrls: ['./update-cours.component.css']
})
export class UpdateCoursComponent implements OnInit {
  coursId!: number;
  updateForm!: FormGroup;
  public showNameDropdown = environment.showNameDropdown;


  constructor(private route: ActivatedRoute ,
              private coursService: CoursServiceService,
              private fb: FormBuilder,
              private router: Router) {
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.coursId = this.route.snapshot.params.idCours;
    this.coursService.getCoursByID(this.coursId).subscribe({
      next : (value) => {
        this.updateForm = this.fb.group({
            nomCours : this.fb.control(value.nomCours, [Validators.required, Validators.maxLength(20)  ]),
            descriptionCours : this.fb.control(value.descriptionCours, Validators.max(50)),
            price : this.fb.control(value.price, [Validators.min(20), Validators.required]),
            dureeC : this.fb.control(value.dureeC, Validators.required),
            niveau : this.fb.control(value.niveau, Validators.required),
            type: this.fb.control(value.type, Validators.required),
            option: this.fb.control(value.option)
          }
        );

      },
      error : err =>
      {console.log(err); }
    });

  }
  // tslint:disable-next-line:typedef
  UpdateCourse() {
    const cours: Cours = this.updateForm.value;
    cours.idCours = this.coursId;
    this.coursService.updateCours(cours).subscribe({
      next: value => {
        alert('Update DONE') ;
        this.router.navigateByUrl('/instructors/get-course') ;
      }, error : err => {console.log(err); }});

  }
}
