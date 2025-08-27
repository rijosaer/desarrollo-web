import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoanDetail } from './show-loan-detail';

describe('ShowLoanDetail', () => {
  let component: ShowLoanDetail;
  let fixture: ComponentFixture<ShowLoanDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLoanDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLoanDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
