import { Publication } from 'src/app/model/publication';
import { Component, OnInit, ViewChild, OnDestroy } from '@angular/core';
import { FilterService } from 'src/app/services/filter.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-find-filter-form',
  templateUrl: './find-filter-form.component.html',
  styleUrls: ['./find-filter-form.component.css']
})
export class FindFilterFormComponent implements OnInit, OnDestroy {
  @ViewChild('FilterForm') IdentifierEntryForm: HTMLFormElement;
  pubFilter: Publication = new Publication(0);
  private subscription: Subscription;


  constructor(private filterService: FilterService) { }

  ngOnInit() {
    this.pubFilter = this.filterService.getPubFilter();

    this.subscription = this.filterService.filterChanged
    .subscribe(
      (pubFilter: Publication) => {
        this.pubFilter = pubFilter;
      }
    );
  }

  changed() {
    this.pubFilter = this.filterService.getPubFilter();
    this.filterService.changeFilter(this.pubFilter);
  }
  
  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
