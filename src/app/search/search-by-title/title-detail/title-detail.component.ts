import { Router, ActivatedRoute, Params } from '@angular/router';
import { Publication } from './../../../model/publication';
import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-title-detail',
  templateUrl: './title-detail.component.html',
  styleUrls: ['./title-detail.component.css']
})
export class TitleDetailComponent implements OnInit {
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
