import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowHistory } from './show-history';

describe('ShowHistory', () => {
  let component: ShowHistory;
  let fixture: ComponentFixture<ShowHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
