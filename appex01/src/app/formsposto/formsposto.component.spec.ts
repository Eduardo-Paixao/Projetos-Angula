import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FormspostoComponent } from './formsposto.component';

describe('FormspostoComponent', () => {
  let component: FormspostoComponent;
  let fixture: ComponentFixture<FormspostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FormspostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FormspostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
