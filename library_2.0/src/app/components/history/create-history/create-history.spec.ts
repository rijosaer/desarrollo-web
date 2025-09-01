import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateHistory } from './create-history';

describe('CreateHistory', () => {
  let component: CreateHistory;
  let fixture: ComponentFixture<CreateHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
