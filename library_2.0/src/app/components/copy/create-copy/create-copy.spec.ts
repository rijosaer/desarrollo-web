import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateCopy } from './create-copy';

describe('CreateCopy', () => {
  let component: CreateCopy;
  let fixture: ComponentFixture<CreateCopy>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateCopy]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateCopy);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
