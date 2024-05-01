import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CalendarAffComponent } from './calendar-aff.component';

describe('CalendarAffComponent', () => {
  let component: CalendarAffComponent;
  let fixture: ComponentFixture<CalendarAffComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CalendarAffComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CalendarAffComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
