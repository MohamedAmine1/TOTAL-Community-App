import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WashPage } from './wash.page';

describe('WashPage', () => {
  let component: WashPage;
  let fixture: ComponentFixture<WashPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ WashPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WashPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
