import { ActivatedRoute, Router, Params } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { Publication } from 'src/app/model/publication';
import { PublicationService } from 'src/app/services/publications.service';

@Component({
  selector: 'app-find-detail',
  templateUrl: './find-detail.component.html',
  styleUrls: ['./find-detail.component.css']
})
export class FindDetailComponent implements OnInit {
  pub: Publication = new Publication(0);
  doi: string;
  constructor(private pubsService: PublicationService,
    private route: ActivatedRoute,
    private router: Router) { }

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
