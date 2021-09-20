import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormWithReactFormComponent } from './form-with-react-form.component';

describe('FormWithReactFormComponent', () => {
  let component: FormWithReactFormComponent;
  let fixture: ComponentFixture<FormWithReactFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormWithReactFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormWithReactFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
