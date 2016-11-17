/* tslint:disable:no-unused-variable */
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { By } from '@angular/platform-browser';
import { DebugElement } from '@angular/core';

import { EbcSvgComponent } from './ebc-svg.component';

describe('EbcSvgComponent', () => {
  let component: EbcSvgComponent;
  let fixture: ComponentFixture<EbcSvgComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbcSvgComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbcSvgComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
