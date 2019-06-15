import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChangpasPage } from './changpas.page';

describe('ChangpasPage', () => {
  let component: ChangpasPage;
  let fixture: ComponentFixture<ChangpasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChangpasPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChangpasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
