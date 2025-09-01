import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchCategory } from './search-category';

describe('SearchCategory', () => {
  let component: SearchCategory;
  let fixture: ComponentFixture<SearchCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
