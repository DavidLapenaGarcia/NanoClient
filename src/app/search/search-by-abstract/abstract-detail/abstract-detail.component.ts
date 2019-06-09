import { Router, ActivatedRoute, Params } from '@angular/router';
import { Publication } from 'src/app/model/publication';
import { Component, OnInit } from '@angular/core';
import { PublicationService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-abstract-detail',
  templateUrl: './abstract-detail.component.html',
  styleUrls: ['./abstract-detail.component.css']
})
export class AbstractDetailComponent implements OnInit {
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
