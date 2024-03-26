import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorChangePasswordComponent } from './professor-change-password.component';

describe('ProfessorChangePasswordComponent', () => {
  let component: ProfessorChangePasswordComponent;
  let fixture: ComponentFixture<ProfessorChangePasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorChangePasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorChangePasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
