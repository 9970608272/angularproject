import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditpersonalinfoComponent } from './editpersonalinfo.component';

describe('EditpersonalinfoComponent', () => {
  let component: EditpersonalinfoComponent;
  let fixture: ComponentFixture<EditpersonalinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditpersonalinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditpersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
