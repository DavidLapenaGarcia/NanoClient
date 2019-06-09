import { FormsInputsService } from './../../services/forms-inputs.service';
import { PublicationService } from './../../services/publications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-author',
  templateUrl: './search-by-author.component.html',
  styleUrls: ['./search-by-author.component.css'],
  providers: [PublicationService, FormsInputsService]
})
export class SearchByAuthorComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
