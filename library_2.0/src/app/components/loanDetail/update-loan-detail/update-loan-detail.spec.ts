import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateLoanDetail } from './update-loan-detail';

describe('UpdateLoanDetail', () => {
  let component: UpdateLoanDetail;
  let fixture: ComponentFixture<UpdateLoanDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateLoanDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateLoanDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
