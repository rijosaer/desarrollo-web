import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchReservation } from './search-reservation';

describe('SearchReservation', () => {
  let component: SearchReservation;
  let fixture: ComponentFixture<SearchReservation>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchReservation]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchReservation);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
