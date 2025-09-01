import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchAuthor } from './search-author';

describe('SearchAuthor', () => {
  let component: SearchAuthor;
  let fixture: ComponentFixture<SearchAuthor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchAuthor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchAuthor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
