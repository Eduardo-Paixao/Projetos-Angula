import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormhospitalComponent } from './formhospital.component';

describe('FormhospitalComponent', () => {
  let component: FormhospitalComponent;
  let fixture: ComponentFixture<FormhospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormhospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormhospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
