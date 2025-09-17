import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgGetall } from './asg-getall';

describe('AsgGetall', () => {
  let component: AsgGetall;
  let fixture: ComponentFixture<AsgGetall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsgGetall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsgGetall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
