import { FilterService } from 'src/app/services/filter.service';
import { Component, OnInit, OnDestroy } from '@angular/core';
import { Publication } from 'src/app/model/publication';
import { Pagination } from 'src/app/model/pagination';
import { PublicationService } from 'src/app/services/publications.service';
import { Author } from 'src/app/model/author';
import { Keyword } from 'src/app/model/keyword';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-find-list',
  templateUrl: './find-list.component.html',
  styleUrls: ['./find-list.component.css']
})
export class FindListComponent implements OnInit, OnDestroy {
  pubs: Publication[];
  pubsFilted: Publication[];

  pubFilterd: Publication;
  subscription: Subscription;

  // TODO: delete pubs
  public pubsT: Publication[] = [
    new Publication(3, '12345A', ' Title3', 'Abstract3', 'David3', 'Review3', 'httml3', 'https3',
      'Retrieval3', 'Crossref3', 'Article3', 'Scopus3',
      [new Author(1, 'auid3', 'David3'), new Author(2, 'auid3', 'Anna3')],
      [new Keyword(1, 'Color', 'Blau')])
  ];
  constructor(private pubsService: PublicationService,
    private filterService: FilterService) { }

  ngOnInit() {
    //TODO: Delete sentence below
    this.pubsService.addPublications(this.pubsT);

    this.pubs = this.pubsService.getPublications();
    this.pubsFilted = this.pubs;

    this.subscription = this.filterService.filterChanged
      .subscribe(
        (pubF: Publication) => {
          this.filter(pubF);
        }
      );
  }

  filter(pubF: Publication): void {
    this.pubsFilted = this.pubs.filter(
      p => {
        let titleValid = false;
        let authorValid = false;
        let abstractValid = false;
        let pubKeyValid = false;

        // Title:0
        if (pubF.title && pubF.title !== '') {
          titleValid = p.title.toLowerCase().indexOf(pubF.title.toLowerCase()) !== -1;
        } else {
          titleValid = true;
        }

        // Abstract:
        if (pubF.abstract && pubF.abstract !== '') {
          abstractValid = p.abstract.toLowerCase().indexOf(pubF.abstract.toLowerCase()) !== -1;
        } else {
          abstractValid = true;
        }

        // Author:
        if (p.authors.filter(
          author => {
            let validAuid = false;
            let validFirstName = false;
            let validSecondName = false;
            let validInstitution = false;
            let validCountry = false;

            // Author - auid
            if (pubF.authors[0].auid && pubF.authors[0].auid !== '') {
              validAuid = author.auid.toLowerCase().indexOf(pubF.authors[0].auid.toLowerCase()) !== -1;
            } else {
              validAuid = true;
            }
            // Author - firstName
            if (pubF.authors[0].firstname && pubF.authors[0].firstname !== '') {
              validFirstName = author.firstname.toLowerCase().indexOf(pubF.authors[0].firstname.toLowerCase()) !== -1;
            } else {
              validFirstName = true;
            }
            // Author - surName
            if (pubF.authors[0].surname && pubF.authors[0].surname !== '') {
              validSecondName = author.surname.toLowerCase().indexOf(pubF.authors[0].surname.toLowerCase()) !== -1;
            } else {
              validSecondName = true;
            }
            // Author - validInstitution
            if (pubF.authors[0].institutionName && pubF.authors[0].institutionName !== '') {
              validInstitution = author.institutionName.toLowerCase().indexOf(pubF.authors[0].institutionName.toLowerCase()) !== -1;
            } else {
              validInstitution = true;
            }
            // Author - validCountry
            if (pubF.authors[0].country && pubF.authors[0].country !== '') {
              validCountry = author.country.toLowerCase().indexOf(pubF.authors[0].country.toLowerCase()) !== -1;
            } else {
              validCountry = true;
            }

            return (validFirstName && validSecondName && validAuid && validCountry && validInstitution);
          }
        ).length !== 0 ) {
          authorValid = true;
        }

        // Keyword- totem , totem? contented:
        if (p.keywords.filter(
          kw => {
            let validKw = false;
            // Keyword - Totem
            if (pubF.keywords[0].totem && pubF.keywords[0].totem !== '' ) {
                  if (pubF.keywords[0].contented && pubF.keywords[0].contented !== '') {
                    validKw = kw.totem.toLowerCase().indexOf(pubF.keywords[0].totem.toLowerCase()) !== -1 &&
                              kw.contented.toLowerCase().indexOf(pubF.keywords[0].contented.toLowerCase()) !== -1;
                  } else {
                     validKw = kw.totem.toLowerCase().indexOf(pubF.keywords[0].totem.toLowerCase()) !== -1;
                  }
            } else {
              validKw = true;
            }
            return (validKw);
          }
        ).length !== 0 ) {
          pubKeyValid = true;
        }

        return (titleValid && abstractValid && authorValid && pubKeyValid);
      }
    );
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
