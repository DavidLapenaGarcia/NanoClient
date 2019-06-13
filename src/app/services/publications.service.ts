import { Publication } from './../model/publication';
import { Injectable } from '@angular/core';
import { Author } from '../model/author';
import { Keyword } from '../model/keyword';
import { Subject } from 'rxjs';
import { PublicationAPIService } from './publication-api.service';

@Injectable ()
export class PublicationService{

    private pubs: Publication[] = [
        new Publication(1, '1234A', ' Title1', 'Abstract1', 'David', 'Review1', 'httml1', 'https1',
            'Retrieval1', 'Crossref1', 'Article1', 'Scopus1',
            [new Author(1, 'auid1', 'David1'), new Author(2, 'auid2', 'Anna')],
            [new Keyword(0, 'Colorr', 'Blue')]),

        new Publication(2, '1234B', 'Title2', 'Abstract2', 'Anna', 'Review2', 'httml2', 'https2',
            'Retrieval2', 'Crossref2', 'Article2', 'Scopus2',
            [new Author(2, 'auid2', 'Anna'), new Author(1, 'auid1', 'David2')],
            [new Keyword(2, 'Color', 'Red')])
    ];

    pubsChanged = new Subject<Publication[]> ();

    constructor(private publicationApi: PublicationAPIService) {}

    getPublications(): Publication[] {
    // Using slice() we return an a copy of the array, so not the same instance.
        this.publicationApi
         .getAllPublications()
         .subscribe(
             (ps: any) => {
               this.pubs = ps;
               console.log(ps);
              // this.pubsChanged.next( this.pubs.slice() );
             }
         );
        return this.pubs.slice();
    }
    
    addPublications(pub: Publication[]): void {
        this.pubs.push(...pub);
        this.pubsChanged.next( this.pubs.slice() );
    }

    getPublicationByDoi(doi: string): Publication {
        let pub: Publication = null;
        pub = this.pubs.find(function(p) {
            return p.doi === doi;
        });
        return pub;
    }
}
