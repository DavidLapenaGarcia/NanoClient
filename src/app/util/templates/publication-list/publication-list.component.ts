import { Pagination } from '../../../model/pagination';
import { Publication } from '../../../model/publication';
import { Component, OnInit, Input } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-publication-list',
  templateUrl: './publication-list.component.html',
  styleUrls: ['./publication-list.component.css']
})
export class PublicationListComponent implements OnInit {
  @Input() pubs: Publication[];
  pagination: Pagination;

  constructor(private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.pagination = new Pagination(this.pubs.length, 4, 1);
  }

 onSelected(identifier) {
    this.router.navigate([identifier], {relativeTo: this.route});
  }
}
