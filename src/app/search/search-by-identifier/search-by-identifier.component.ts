import { FormsInputsService } from './../../services/forms-inputs.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { PublicationService } from './../../services/publications.service';
import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/model/publication';

@Component({
  selector: 'app-by-identifier',
  templateUrl: './search-by-identifier.component.html',
  styleUrls: ['./search-by-identifier.component.css'],
  providers: [PublicationService]
})
export class SearchByIdentifierComponent implements OnInit {
  identifierType = '';
  identifier = '';

  pub: Publication = new Publication(0);
  doi: string;

  constructor(private pubsService: PublicationService,
              private router: Router,
              private route: ActivatedRoute) { }

  ngOnInit() {
    this.pub = null;
      this.route.params.subscribe(
        (params: Params) => {
          if (params['identifier']) {
              this.doi = params['identifier'];
              this.pub = this.pubsService.getPublicationByDoi(this.doi);
              console.log(this.pub);
            }
          }
      );
  }

}
