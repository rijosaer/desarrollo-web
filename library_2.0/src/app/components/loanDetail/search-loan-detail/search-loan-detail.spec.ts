import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoanDetail } from './search-loan-detail';

describe('SearchLoanDetail', () => {
  let component: SearchLoanDetail;
  let fixture: ComponentFixture<SearchLoanDetail>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLoanDetail]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLoanDetail);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
