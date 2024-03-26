import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorPendingBlogComponent } from './professor-pending-blog.component';

describe('ProfessorPendingBlogComponent', () => {
  let component: ProfessorPendingBlogComponent;
  let fixture: ComponentFixture<ProfessorPendingBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorPendingBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorPendingBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
