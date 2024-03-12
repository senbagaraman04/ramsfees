import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsTeacherComponent } from './rams-teacher.component';

describe('RamsTeacherComponent', () => {
  let component: RamsTeacherComponent;
  let fixture: ComponentFixture<RamsTeacherComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamsTeacherComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamsTeacherComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
