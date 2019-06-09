import { FormsInputsService } from './../../../services/forms-inputs.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';
import { PublicationService } from 'src/app/services/publications.service';
import { Publication } from 'src/app/model/publication';
@Component({
  selector: 'app-by-identifier-form',
  templateUrl: './search-by-identifier-form.component.html',
  styleUrls: ['./search-by-identifier-form.component.css'],

  providers: [PublicationService]
})
export class SearchByIdentifierFormComponent implements OnInit {
  @ViewChild('IdentifierEntryForm') IdentifierEntryForm: HTMLFormElement;
  identifierTypes: string[] = [];

  identifier: string;
  identifierType: string;

  pub: Publication = new Publication(0);


  constructor(private formsService: FormsInputsService,
              private router: Router) {
  }

  ngOnInit() {
    this.identifierTypes = ['doi', 'eid'];
    this.identifier = this.formsService.getIdentifier();
    this.identifierType = this.formsService.getIdentifierType();
  }

  validIdentifier(): boolean {
    return true;
  }

  onSelected() {
    this.formsService.setIdentifier(this.identifier);
    this.formsService.setIdentifierType(this.identifierType);
    this.router.navigate(['/search/byIdentifier/', this.identifierTypes[this.identifierType], this.identifier]);
  }
}
