import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteuserlistComponent } from './deleteuserlist.component';

describe('DeleteuserlistComponent', () => {
  let component: DeleteuserlistComponent;
  let fixture: ComponentFixture<DeleteuserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteuserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
