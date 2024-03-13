import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsDashbaordComponent } from './rams-dashbaord.component';

describe('RamsDashbaordComponent', () => {
  let component: RamsDashbaordComponent;
  let fixture: ComponentFixture<RamsDashbaordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamsDashbaordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamsDashbaordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
