import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DeletephotographerComponent } from './deletephotographer.component';

describe('DeletephotographerComponent', () => {
  let component: DeletephotographerComponent;
  let fixture: ComponentFixture<DeletephotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DeletephotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DeletephotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
