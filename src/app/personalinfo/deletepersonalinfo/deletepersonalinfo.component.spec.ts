import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletepersonalinfoComponent } from './deletepersonalinfo.component';

describe('DeletepersonalinfoComponent', () => {
  let component: DeletepersonalinfoComponent;
  let fixture: ComponentFixture<DeletepersonalinfoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletepersonalinfoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletepersonalinfoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
