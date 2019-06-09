import { FilterService } from './../services/filter.service';
import { PublicationService } from 'src/app/services/publications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css'],
  providers: [PublicationService]
})
export class FindComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
