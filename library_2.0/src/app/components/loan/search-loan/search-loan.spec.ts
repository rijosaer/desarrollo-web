import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchLoan } from './search-loan';

describe('SearchLoan', () => {
  let component: SearchLoan;
  let fixture: ComponentFixture<SearchLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
