import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateEditorial } from './create-editorial';

describe('CreateEditorial', () => {
  let component: CreateEditorial;
  let fixture: ComponentFixture<CreateEditorial>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateEditorial]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateEditorial);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
