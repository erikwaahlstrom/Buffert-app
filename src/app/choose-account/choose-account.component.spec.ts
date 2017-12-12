import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseaccountComponent } from './choose-account.component';

describe('ChooseaccountComponent', () => {
  let component: ChooseaccountComponent;
  let fixture: ComponentFixture<ChooseaccountComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseaccountComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseaccountComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
