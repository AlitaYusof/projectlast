import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ComfermjobPage } from './comfermjob.page';

describe('ComfermjobPage', () => {
  let component: ComfermjobPage;
  let fixture: ComponentFixture<ComfermjobPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ComfermjobPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ComfermjobPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
