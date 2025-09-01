import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowCopy } from './show-copy';

describe('ShowCopy', () => {
  let component: ShowCopy;
  let fixture: ComponentFixture<ShowCopy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowCopy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowCopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
