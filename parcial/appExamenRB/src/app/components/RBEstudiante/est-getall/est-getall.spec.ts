import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstGetall } from './est-getall';

describe('EstGetall', () => {
  let component: EstGetall;
  let fixture: ComponentFixture<EstGetall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstGetall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstGetall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
