import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormDataComponentComponent } from './form-data-component.component';

describe('FormDataComponentComponent', () => {
  let component: FormDataComponentComponent;
  let fixture: ComponentFixture<FormDataComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormDataComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormDataComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
