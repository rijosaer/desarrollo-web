import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrdGetall } from './grd-getall';

describe('GrdGetall', () => {
  let component: GrdGetall;
  let fixture: ComponentFixture<GrdGetall>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrdGetall]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrdGetall);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
