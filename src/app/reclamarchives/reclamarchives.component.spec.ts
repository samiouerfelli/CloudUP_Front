import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ReclamarchivesComponent } from './reclamarchives.component';

describe('ReclamarchivesComponent', () => {
  let component: ReclamarchivesComponent;
  let fixture: ComponentFixture<ReclamarchivesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ReclamarchivesComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ReclamarchivesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
