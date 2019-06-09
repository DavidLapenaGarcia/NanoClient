import { FormsInputsService } from './../../../services/forms-inputs.service';
import { Router } from '@angular/router';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-abstract-form',
  templateUrl: './search-by-abstract-form.component.html',
  styleUrls: ['./search-by-abstract-form.component.css']
})
export class SearchByAbstractFormComponent implements OnInit {
  @ViewChild('AbstractEntryForm') IdentifierEntryForm: HTMLFormElement;
  public abstract: string;

  constructor(private formsService: FormsInputsService,
              private router: Router) {
  }

  ngOnInit() {
    this.abstract = this.formsService.getAbstract();
  }

  validAbstract(): boolean {
    return true;
  }

  onSelected() {
    this.formsService.setAbstract(this.abstract);
    this.router.navigate(['/search/byAbstract/', this.abstract]);
  }
}
