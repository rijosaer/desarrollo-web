import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBAside } from './rb-aside';

describe('RBAside', () => {
  let component: RBAside;
  let fixture: ComponentFixture<RBAside>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RBAside]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RBAside);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
