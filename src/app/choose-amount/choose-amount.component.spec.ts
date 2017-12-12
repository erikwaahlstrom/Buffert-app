import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseamountComponent } from './choose-amount.component';

describe('ChooseamountComponent', () => {
  let component: ChooseamountComponent;
  let fixture: ComponentFixture<ChooseamountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseamountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseamountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
