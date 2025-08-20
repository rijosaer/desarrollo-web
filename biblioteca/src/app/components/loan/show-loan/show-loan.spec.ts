import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowLoan } from './show-loan';

describe('ShowLoan', () => {
  let component: ShowLoan;
  let fixture: ComponentFixture<ShowLoan>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowLoan]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowLoan);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
