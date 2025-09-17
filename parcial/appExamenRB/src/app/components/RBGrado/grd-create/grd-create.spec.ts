import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrdCreate } from './grd-create';

describe('GrdCreate', () => {
  let component: GrdCreate;
  let fixture: ComponentFixture<GrdCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [GrdCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(GrdCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
