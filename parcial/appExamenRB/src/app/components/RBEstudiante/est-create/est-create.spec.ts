import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EstCreate } from './est-create';

describe('EstCreate', () => {
  let component: EstCreate;
  let fixture: ComponentFixture<EstCreate>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [EstCreate]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EstCreate);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
