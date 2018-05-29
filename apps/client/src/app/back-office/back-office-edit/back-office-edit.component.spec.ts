/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BackOfficeEditComponent } from './back-office-edit.component';

describe('BackOfficeEditComponent', () => {
  let component: BackOfficeEditComponent;
  let fixture: ComponentFixture<BackOfficeEditComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOfficeEditComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
