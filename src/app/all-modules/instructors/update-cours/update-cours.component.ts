import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {environment} from '../../../../environments/environment';
import {CoursControllerService} from '../../../services/services/cours-controller.service';
import {CoursRequest, Niveau} from '../../../services/models/cours-request';

// @ts-ignore
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


  constructor(private route: ActivatedRoute,
              private fb: FormBuilder,
              private service: CoursControllerService,
              private router: Router) {
  }

  ngOnInit(): void {
    console.log(this.coursId);
    this.coursId = this.route.snapshot.params.idCours;
    this.service.findCoursById({idC: this.coursId}).subscribe({
      next: (cours) => {
        this.updateForm = this.fb.group({
          nomCours: [cours.nomCours, [Validators.required, Validators.maxLength(20)]],
          descriptionCours: [cours.descriptionCours, [Validators.maxLength(50)]],
          price: [cours.price, [Validators.required, Validators.min(20)]],
          dureeC: [cours.dureeC, Validators.required],
          niveau: [cours.niveau, Validators.required],
          type: [cours.type, Validators.required],
          option: [cours.option]
        }
      );
      },
      error: err => {
        console.error('Failed to load course details', err);
      }
    });


  }


  // tslint:disable-next-line:typedef
  UpdateCourse() {
    const cours: CoursRequest = this.updateForm.value;
    cours.idCours = this.coursId;
    this.service.updateCours({coursID: this.coursId, body: cours}).subscribe({
      next: value => {
        alert('Update DONE');
        this.router.navigateByUrl('/instructors/get-course');
      }, error: err => {
        console.log(err);
      }
    });
  }
  // tslint:disable-next-line:typedef
  onChanges() {
    // tslint:disable-next-line:no-non-null-assertion
    this.updateForm.get('niveau')!.valueChanges.subscribe(val => {
      this.showNameDropdown = (val === Niveau.LEVEL_4EME || val === Niveau.LEVEL_5EME);
      if (this.showNameDropdown) {
        // tslint:disable-next-line:no-non-null-assertion
        this.updateForm.get('option')!.setValue('');
      }
    });
  }
}





