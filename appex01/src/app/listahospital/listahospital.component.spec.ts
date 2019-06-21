import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListahospitalComponent } from './listahospital.component';

describe('ListahospitalComponent', () => {
  let component: ListahospitalComponent;
  let fixture: ComponentFixture<ListahospitalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListahospitalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListahospitalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
