import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewavailabiltyComponent } from './viewavailabilty.component';

describe('ViewavailabiltyComponent', () => {
  let component: ViewavailabiltyComponent;
  let fixture: ComponentFixture<ViewavailabiltyComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewavailabiltyComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewavailabiltyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
