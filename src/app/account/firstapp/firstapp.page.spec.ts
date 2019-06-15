import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FirstappPage } from './firstapp.page';

describe('FirstappPage', () => {
  let component: FirstappPage;
  let fixture: ComponentFixture<FirstappPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FirstappPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FirstappPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
