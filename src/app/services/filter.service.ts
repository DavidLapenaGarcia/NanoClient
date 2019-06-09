import { Keyword } from './../model/keyword';
import { Author } from 'src/app/model/author';
import { Subject } from 'rxjs';
import { Publication } from './../model/publication';
import { Injectable } from '@angular/core';
import { Key } from 'protractor';

@Injectable({
  providedIn: 'root'
})
export class FilterService {
  private aus: Author[] = [new Author(0, '', '', '', '', '')];
  private kws: Keyword[] = [new Keyword(0, '', '')] ;
  private pubFilter: Publication =  new Publication(0, '', '', '', '', '', '', '', '', '', '', '' ,
                                    this.aus,
                                    this.kws) ;
  public filterChanged = new Subject<Publication> ();

  constructor() { }

  getPubFilter(): Publication {
    return this.pubFilter;
  }

  changeFilter(p: Publication): void {
    this.pubFilter = p;
    this.filterChanged.next( this.pubFilter );
  }



}
