import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithModelComponent } from './form-with-model.component';

describe('FormWithModelComponent', () => {
  let component: FormWithModelComponent;
  let fixture: ComponentFixture<FormWithModelComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithModelComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithModelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
