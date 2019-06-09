import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FindFilterFormComponent } from './find-filter-form.component';

describe('FindFilterFormComponent', () => {
  let component: FindFilterFormComponent;
  let fixture: ComponentFixture<FindFilterFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FindFilterFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FindFilterFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
