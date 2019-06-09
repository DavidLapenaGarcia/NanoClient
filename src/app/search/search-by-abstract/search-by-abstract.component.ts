import { FormsInputsService } from './../../services/forms-inputs.service';
import { PublicationService } from './../../services/publications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-by-abstract',
  templateUrl: './search-by-abstract.component.html',
  styleUrls: ['./search-by-abstract.component.css'],
  providers: [PublicationService]
})
export class SearchByAbstractComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
