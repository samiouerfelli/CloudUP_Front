import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CollaborationresssssComponent } from './collaborationresssss.component';

describe('CollaborationresssssComponent', () => {
  let component: CollaborationresssssComponent;
  let fixture: ComponentFixture<CollaborationresssssComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CollaborationresssssComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CollaborationresssssComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
