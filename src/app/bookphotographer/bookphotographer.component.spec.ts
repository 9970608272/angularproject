import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookphotographerComponent } from './bookphotographer.component';

describe('BookphotographerComponent', () => {
  let component: BookphotographerComponent;
  let fixture: ComponentFixture<BookphotographerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookphotographerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookphotographerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
