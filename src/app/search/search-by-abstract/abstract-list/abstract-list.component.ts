import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/model/publication';
import { PublicationService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-abstract-list',
  templateUrl: './abstract-list.component.html',
  styleUrls: ['./abstract-list.component.css']
})
export class AbstractListComponent implements OnInit {
  pubs: Publication[];
  pubsFilted: Publication[];

  constructor(private pubsService: PublicationService) { }

  ngOnInit() {
    this.pubs = this.pubsService.getPublications();
    this.pubsFilted = this.pubs;
  }
}
