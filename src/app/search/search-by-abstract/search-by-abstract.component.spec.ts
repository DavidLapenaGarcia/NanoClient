import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByAbstractComponent } from './search-by-abstract.component';

describe('SearchByAbstractComponent', () => {
  let component: SearchByAbstractComponent;
  let fixture: ComponentFixture<SearchByAbstractComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByAbstractComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByAbstractComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
