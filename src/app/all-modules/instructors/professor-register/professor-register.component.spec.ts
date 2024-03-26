import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorRegisterComponent } from './professor-register.component';

describe('ProfessorRegisterComponent', () => {
  let component: ProfessorRegisterComponent;
  let fixture: ComponentFixture<ProfessorRegisterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorRegisterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorRegisterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
