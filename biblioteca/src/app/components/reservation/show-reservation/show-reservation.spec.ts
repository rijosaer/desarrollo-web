import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowReservation } from './show-reservation';

describe('ShowReservation', () => {
  let component: ShowReservation;
  let fixture: ComponentFixture<ShowReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowReservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowReservation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
