import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCategory } from './show-category';

describe('ShowCategory', () => {
  let component: ShowCategory;
  let fixture: ComponentFixture<ShowCategory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCategory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCategory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
