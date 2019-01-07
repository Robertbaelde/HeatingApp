import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SchudleIndexPage } from './schudle-index.page';

describe('SchudleIndexPage', () => {
  let component: SchudleIndexPage;
  let fixture: ComponentFixture<SchudleIndexPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SchudleIndexPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SchudleIndexPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
