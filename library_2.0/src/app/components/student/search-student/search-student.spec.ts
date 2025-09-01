import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchStudent } from './search-student';

describe('SearchStudent', () => {
  let component: SearchStudent;
  let fixture: ComponentFixture<SearchStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
