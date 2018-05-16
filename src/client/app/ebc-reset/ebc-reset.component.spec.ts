import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EbcResetComponent } from './ebc-reset.component';

describe('EbcResetComponent', () => {
  let component: EbcResetComponent;
  let fixture: ComponentFixture<EbcResetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EbcResetComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EbcResetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
