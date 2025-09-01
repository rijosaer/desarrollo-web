import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowAuthor } from './show-author';

describe('ShowAuthor', () => {
  let component: ShowAuthor;
  let fixture: ComponentFixture<ShowAuthor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowAuthor]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowAuthor);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
