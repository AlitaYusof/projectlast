import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Markmap1Page } from './markmap1.page';

describe('Markmap1Page', () => {
  let component: Markmap1Page;
  let fixture: ComponentFixture<Markmap1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Markmap1Page ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Markmap1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
