import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByTitleFormComponent } from './search-by-title-form.component';

describe('SearchByTitleFormComponent', () => {
  let component: SearchByTitleFormComponent;
  let fixture: ComponentFixture<SearchByTitleFormComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByTitleFormComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByTitleFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
