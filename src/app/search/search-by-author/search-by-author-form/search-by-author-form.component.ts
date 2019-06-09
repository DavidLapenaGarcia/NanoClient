import { Author } from 'src/app/model/author';
import { Router } from '@angular/router';
import { FormsInputsService } from './../../../services/forms-inputs.service';
import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-by-author-form',
  templateUrl: './search-by-author-form.component.html',
  styleUrls: ['./search-by-author-form.component.css']
})
export class SearchByAuthorFormComponent implements OnInit {
 // @ViewChild('AbstractEntryForm') IdentifierEntryForm: HTMLFormElement;
  public author: Author;

  constructor(private formsService: FormsInputsService,
              private router: Router) {
  }

  ngOnInit() {
    this.author = this.formsService.getAuthor();
  }

  validAbstract(): boolean {
    return true;
  }

  onSelected() {
    this.formsService.setAuthor(this.author);
    this.router.navigate(['/search/byAuthor/', this.author]);
  }

}
