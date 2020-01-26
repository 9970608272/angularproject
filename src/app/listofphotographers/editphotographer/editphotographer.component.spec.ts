import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditphotographerComponent } from './editphotographer.component';

describe('EditphotographerComponent', () => {
  let component: EditphotographerComponent;
  let fixture: ComponentFixture<EditphotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditphotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditphotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
