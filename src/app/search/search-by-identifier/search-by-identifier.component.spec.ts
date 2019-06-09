import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SearchByIdentifierComponent } from './search-by-identifier.component';

describe('SearchByIdentifierComponent', () => {
  let component: SearchByIdentifierComponent;
  let fixture: ComponentFixture<SearchByIdentifierComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SearchByIdentifierComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SearchByIdentifierComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
