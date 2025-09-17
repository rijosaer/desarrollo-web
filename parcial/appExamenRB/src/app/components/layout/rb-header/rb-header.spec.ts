import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RBHeader } from './rb-header';

describe('RBHeader', () => {
  let component: RBHeader;
  let fixture: ComponentFixture<RBHeader>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RBHeader]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RBHeader);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
