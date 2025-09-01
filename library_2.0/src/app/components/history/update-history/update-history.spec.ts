import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateHistory } from './update-history';

describe('UpdateHistory', () => {
  let component: UpdateHistory;
  let fixture: ComponentFixture<UpdateHistory>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UpdateHistory]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UpdateHistory);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
