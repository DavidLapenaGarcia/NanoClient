import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/model/publication';
import { PublicationService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-identifier-detail',
  templateUrl: './identifier-detail.component.html',
  styleUrls: ['./identifier-detail.component.css']
})
export class IdentifierDetailComponent implements OnInit {
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
            }
          }
      );
  }

}
