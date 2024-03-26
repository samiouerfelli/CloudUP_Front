import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorBlogComponent } from './professor-blog.component';

describe('ProfessorBlogComponent', () => {
  let component: ProfessorBlogComponent;
  let fixture: ComponentFixture<ProfessorBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
