import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeleteviewplanComponent } from './deleteviewplan.component';

describe('DeleteviewplanComponent', () => {
  let component: DeleteviewplanComponent;
  let fixture: ComponentFixture<DeleteviewplanComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeleteviewplanComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeleteviewplanComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
