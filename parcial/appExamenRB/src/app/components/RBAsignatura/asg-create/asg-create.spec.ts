import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AsgCreate } from './asg-create';

describe('AsgCreate', () => {
  let component: AsgCreate;
  let fixture: ComponentFixture<AsgCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AsgCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AsgCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
