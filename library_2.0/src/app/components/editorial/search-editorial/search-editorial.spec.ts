import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchEditorial } from './search-editorial';

describe('SearchEditorial', () => {
  let component: SearchEditorial;
  let fixture: ComponentFixture<SearchEditorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SearchEditorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SearchEditorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
