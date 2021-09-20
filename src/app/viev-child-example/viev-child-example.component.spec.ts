import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VievChildExampleComponent } from './viev-child-example.component';

describe('VievChildExampleComponent', () => {
  let component: VievChildExampleComponent;
  let fixture: ComponentFixture<VievChildExampleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VievChildExampleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VievChildExampleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
