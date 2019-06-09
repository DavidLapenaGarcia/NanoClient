import { FormsInputsService } from './../../../services/forms-inputs.service';
import { Router, ActivatedRoute, Params } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-title-form',
  templateUrl: './search-by-title-form.component.html',
  styleUrls: ['./search-by-title-form.component.css']
})
export class SearchByTitleFormComponent implements OnInit {
  @ViewChild('TitleEntryForm') IdentifierEntryForm: HTMLFormElement;
  title: string;

  constructor(private formsService: FormsInputsService,
              private router: Router ) { }

  ngOnInit() {
    this.title = this.formsService.getTitle();
  }


  onSelected() {
    this.formsService.setTitle(this.title);
    this.router.navigate(['/search/byTitle/', this.title]);
  }
}
