import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TransferdoneComponent } from './transferdone.component';

describe('TransferdoneComponent', () => {
  let component: TransferdoneComponent;
  let fixture: ComponentFixture<TransferdoneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TransferdoneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TransferdoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
