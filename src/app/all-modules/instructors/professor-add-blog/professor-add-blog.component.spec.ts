import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProfessorAddBlogComponent } from './professor-add-blog.component';

describe('ProfessorAddBlogComponent', () => {
  let component: ProfessorAddBlogComponent;
  let fixture: ComponentFixture<ProfessorAddBlogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProfessorAddBlogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProfessorAddBlogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
