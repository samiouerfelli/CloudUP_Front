import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationreservationComponent } from './collaborationreservation.component';

describe('CollaborationreservationComponent', () => {
  let component: CollaborationreservationComponent;
  let fixture: ComponentFixture<CollaborationreservationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationreservationComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationreservationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
