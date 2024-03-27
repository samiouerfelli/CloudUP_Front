import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RecformulaireComponent } from './recformulaire.component';

describe('RecformulaireComponent', () => {
  let component: RecformulaireComponent;
  let fixture: ComponentFixture<RecformulaireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RecformulaireComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RecformulaireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
