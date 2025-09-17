import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBFooter } from './rb-footer';

describe('RBFooter', () => {
  let component: RBFooter;
  let fixture: ComponentFixture<RBFooter>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RBFooter]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RBFooter);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
