import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChatProfessorComponent } from './chat-professor.component';

describe('ChatProfessorComponent', () => {
  let component: ChatProfessorComponent;
  let fixture: ComponentFixture<ChatProfessorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChatProfessorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ChatProfessorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
