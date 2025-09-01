import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoan } from './update-loan';

describe('UpdateLoan', () => {
  let component: UpdateLoan;
  let fixture: ComponentFixture<UpdateLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
