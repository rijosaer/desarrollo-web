import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowEditorial } from './show-editorial';

describe('ShowEditorial', () => {
  let component: ShowEditorial;
  let fixture: ComponentFixture<ShowEditorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowEditorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowEditorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
