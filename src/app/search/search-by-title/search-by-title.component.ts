import { FormsInputsService } from './../../services/forms-inputs.service';
import { PublicationService } from './../../services/publications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-title',
  templateUrl: './search-by-title.component.html',
  styleUrls: ['./search-by-title.component.css'],
  providers: [PublicationService]
})
export class SearchByTitleComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
