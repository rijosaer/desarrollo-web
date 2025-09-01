import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateEditorial } from './update-editorial';

describe('UpdateEditorial', () => {
  let component: UpdateEditorial;
  let fixture: ComponentFixture<UpdateEditorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateEditorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateEditorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
