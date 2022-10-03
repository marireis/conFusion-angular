import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DishedetailComponent } from './dishedetail.component';

describe('DishedetailComponent', () => {
  let component: DishedetailComponent;
  let fixture: ComponentFixture<DishedetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DishedetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DishedetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
