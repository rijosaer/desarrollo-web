import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowStudent } from './show-student';

describe('ShowStudent', () => {
  let component: ShowStudent;
  let fixture: ComponentFixture<ShowStudent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ShowStudent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ShowStudent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
