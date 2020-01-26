import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectuseraddressComponent } from './selectuseraddress.component';

describe('SelectuseraddressComponent', () => {
  let component: SelectuseraddressComponent;
  let fixture: ComponentFixture<SelectuseraddressComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SelectuseraddressComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectuseraddressComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
