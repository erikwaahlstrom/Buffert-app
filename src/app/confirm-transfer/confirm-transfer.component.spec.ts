import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfirmtransferComponent } from './confirm-transfer.component';

describe('ConfirmtransferComponent', () => {
  let component: ConfirmtransferComponent;
  let fixture: ComponentFixture<ConfirmtransferComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConfirmtransferComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfirmtransferComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
