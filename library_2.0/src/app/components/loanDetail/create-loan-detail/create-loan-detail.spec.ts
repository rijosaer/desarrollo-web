import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLoanDetail } from './create-loan-detail';

describe('CreateLoanDetail', () => {
  let component: CreateLoanDetail;
  let fixture: ComponentFixture<CreateLoanDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLoanDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLoanDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
