import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofphotographersComponent } from './listofphotographers.component';

describe('ListofphotographersComponent', () => {
  let component: ListofphotographersComponent;
  let fixture: ComponentFixture<ListofphotographersComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListofphotographersComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofphotographersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
