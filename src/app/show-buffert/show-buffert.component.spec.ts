import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShowbuffertComponent } from './show-buffert.component';

describe('ShowbuffertComponent', () => {
  let component: ShowbuffertComponent;
  let fixture: ComponentFixture<ShowbuffertComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShowbuffertComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShowbuffertComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
