import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RamsSidebarComponent } from './rams-sidebar.component';

describe('RamsSidebarComponent', () => {
  let component: RamsSidebarComponent;
  let fixture: ComponentFixture<RamsSidebarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RamsSidebarComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(RamsSidebarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
