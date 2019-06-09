import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByAbstractFormComponent } from './search-by-abstract-form.component';

describe('SearchByAbstractFormComponent', () => {
  let component: SearchByAbstractFormComponent;
  let fixture: ComponentFixture<SearchByAbstractFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByAbstractFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByAbstractFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
