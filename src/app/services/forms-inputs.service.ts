import { Author } from './../model/author';
import { Subject } from 'rxjs';
import { Injectable } from '@angular/core';

@Injectable()

export class FormsInputsService {

  public identifier: string = '';
  public identifierType: string = '';
  public title: string = '';
  public abstract: string = '';
  public author = new Author(0);

  constructor() {}

  setIdentifier(identifier: string): void {
    this.identifier = identifier;
  }
  getIdentifier(): string {
    return this.identifier.slice();
  }

  setIdentifierType(identifierType: string): void {
    this.identifierType = identifierType;
  }
  getIdentifierType(): string {
    return this.identifierType.slice();
  }

  setTitle(title: string): void {
    this.title = title;
    // this.titleChanged.next( this.title.slice() );
  }
  getTitle(): string {
    return this.title.slice();
  }

  setAbstract(abstract: string): void {
    this.abstract = abstract;
  }
  getAbstract(): string {
    return this.abstract.slice();
  }

  setAuthor(author: Author): void {
    this.author = author;
    const sAut = this.author;
  }
  getAuthor(): Author {
    const sAut = this.author;
    return sAut;
  }


}
