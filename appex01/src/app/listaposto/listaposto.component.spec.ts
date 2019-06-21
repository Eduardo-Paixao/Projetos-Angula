import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListapostoComponent } from './listaposto.component';

describe('ListapostoComponent', () => {
  let component: ListapostoComponent;
  let fixture: ComponentFixture<ListapostoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListapostoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListapostoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
