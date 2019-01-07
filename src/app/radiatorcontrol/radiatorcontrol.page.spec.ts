import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RadiatorcontrolPage } from './radiatorcontrol.page';

describe('RadiatorcontrolPage', () => {
  let component: RadiatorcontrolPage;
  let fixture: ComponentFixture<RadiatorcontrolPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [RadiatorcontrolPage],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    }).compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RadiatorcontrolPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
