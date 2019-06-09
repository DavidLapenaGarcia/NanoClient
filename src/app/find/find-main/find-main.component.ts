
import { PublicationService } from 'src/app/services/publications.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-find-main',
  templateUrl: './find-main.component.html',
  styleUrls: ['./find-main.component.css'],
  providers: [PublicationService]
})
export class FindMainComponent implements OnInit {

  constructor() { }

  ngOnInit() {

  }

}
