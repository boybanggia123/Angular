import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HomeprojectComponent } from './homeproject.component';

describe('HomeprojectComponent', () => {
  let component: HomeprojectComponent;
  let fixture: ComponentFixture<HomeprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HomeprojectComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(HomeprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
