import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEventPopupComponent } from './update-event-popup.component';

describe('UpdateEventPopupComponent', () => {
  let component: UpdateEventPopupComponent;
  let fixture: ComponentFixture<UpdateEventPopupComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UpdateEventPopupComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEventPopupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
