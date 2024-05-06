import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PartenairesadminComponent } from './partenairesadmin.component';

describe('PartenairesadminComponent', () => {
  let component: PartenairesadminComponent;
  let fixture: ComponentFixture<PartenairesadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PartenairesadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PartenairesadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
