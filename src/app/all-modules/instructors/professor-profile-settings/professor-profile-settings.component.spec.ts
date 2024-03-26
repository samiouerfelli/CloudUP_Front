import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorProfileSettingsComponent } from './professor-profile-settings.component';

describe('ProfessorProfileSettingsComponent', () => {
  let component: ProfessorProfileSettingsComponent;
  let fixture: ComponentFixture<ProfessorProfileSettingsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorProfileSettingsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorProfileSettingsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
