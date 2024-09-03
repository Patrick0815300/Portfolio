import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AboveTheFoldComponent } from './above-the-fold.component';

describe('AboveTheFoldComponent', () => {
  let component: AboveTheFoldComponent;
  let fixture: ComponentFixture<AboveTheFoldComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AboveTheFoldComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(AboveTheFoldComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
