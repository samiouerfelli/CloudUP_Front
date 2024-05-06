import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationdetailsComponent } from './collaborationdetails.component';

describe('CollaborationdetailsComponent', () => {
  let component: CollaborationdetailsComponent;
  let fixture: ComponentFixture<CollaborationdetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationdetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
