/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { BackOfficeFileComponent } from './back-office-file.component';

describe('BackOfficeFileComponent', () => {
  let component: BackOfficeFileComponent;
  let fixture: ComponentFixture<BackOfficeFileComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BackOfficeFileComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BackOfficeFileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
