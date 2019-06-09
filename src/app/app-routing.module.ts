import { TitleDetailComponent } from './search/search-by-title/title-detail/title-detail.component';
import { AbstractDetailComponent } from './search/search-by-abstract/abstract-detail/abstract-detail.component';
import { AbstractListComponent } from './search/search-by-abstract/abstract-list/abstract-list.component';
import { FindDetailComponent } from './find/find-main/find-detail/find-detail.component';
import { FindListComponent } from './find/find-main/find-list/find-list.component';
import { FindMainComponent } from './find/find-main/find-main.component';
import { SearchByAbstractComponent } from './search/search-by-abstract/search-by-abstract.component';
import { SearchMenuComponent } from './search/search-menu/search-menu.component';
import { PublicationListComponent } from './util/templates/publication-list/publication-list.component';
import { SearchComponent } from './search/search.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FindComponent } from './find/find.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchByIdentifierComponent } from './search/search-by-identifier/search-by-identifier.component';
import { SearchByAuthorComponent } from './search/search-by-author/search-by-author.component';
import { SearchByTitleComponent } from './search/search-by-title/search-by-title.component';
import { IdentifierDetailComponent } from './search/search-by-identifier/identifier-detail/identifier-detail.component';
import { TitleListComponent } from './search/search-by-title/title-list/title-list.component';


const routes: Routes = [
  {path: '', redirectTo: '/welcome', pathMatch: 'full' },
  { path: 'welcome', component: MainPageComponent},
  { path: 'find', component: FindComponent, children: [
    {path: '', component: FindMainComponent, children: [
        {path: '', component: FindListComponent},
        {path: ':identifier', component: FindDetailComponent}
        ]},
    ]
  },

  { path: 'search', component: SearchComponent, children: [
        {path: '', component: SearchMenuComponent},
        {path: 'byIdentifier', component: SearchByIdentifierComponent, children: [
            {path: ':identifierType/:identifier', component: IdentifierDetailComponent},
          ]},

        {path: 'byAbstract', component: SearchByAbstractComponent, children: [
            {path: ':abstract', component: AbstractListComponent},
            {path: ':abstract/:identifier', component: AbstractDetailComponent},
          ]},
        {path: 'byTitle', component: SearchByTitleComponent, children: [
          {path: ':title', component: TitleListComponent},
          {path: ':title/:identifier', component: TitleDetailComponent},
        ]},

        {path: 'byAuthor', component: SearchByAuthorComponent}
      ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
