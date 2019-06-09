import { ActivatedRoute, Router, Params } from '@angular/router';
import { PublicationService } from '../../../services/publications.service';
import { Publication } from '../../../model/publication';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-publication-detail',
  templateUrl: './publication-detail.component.html',
  styleUrls: ['./publication-detail.component.css']
})
export class PublicationDetailComponent implements OnInit {
  @Input() pub: Publication[];
  constructor() { }

  ngOnInit() {}

}
