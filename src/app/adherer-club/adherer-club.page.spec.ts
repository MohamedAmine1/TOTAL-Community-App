import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AdhererClubPage } from './adherer-club.page';

describe('AdhererClubPage', () => {
  let component: AdhererClubPage;
  let fixture: ComponentFixture<AdhererClubPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AdhererClubPage ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AdhererClubPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
