import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationadminComponent } from './collaborationadmin.component';

describe('CollaborationadminComponent', () => {
  let component: CollaborationadminComponent;
  let fixture: ComponentFixture<CollaborationadminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationadminComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationadminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
