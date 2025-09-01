import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateCopy } from './update-copy';

describe('UpdateCopy', () => {
  let component: UpdateCopy;
  let fixture: ComponentFixture<UpdateCopy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateCopy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateCopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
