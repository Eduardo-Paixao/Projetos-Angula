import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PostodetalheComponent } from './postodetalhe.component';

describe('PostodetalheComponent', () => {
  let component: PostodetalheComponent;
  let fixture: ComponentFixture<PostodetalheComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PostodetalheComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PostodetalheComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
