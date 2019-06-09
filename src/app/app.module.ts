import { FilterService } from './services/filter.service';
import { FormsInputsService } from './services/forms-inputs.service';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { NgxPaginationModule } from 'ngx-pagination';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';

import { HeaderComponent } from './header/header.component';
import { FindComponent } from './find/find.component';
import { MainPageComponent } from './main-page/main-page.component';
import { SearchComponent } from './search/search.component';
import { PublicationListComponent } from './util/templates/publication-list/publication-list.component';
import { PublicationDetailComponent } from './util/templates/publication-detail/publication-detail.component';
import { SearchByAbstractComponent } from './search/search-by-abstract/search-by-abstract.component';
import { SearchByAuthorComponent } from './search/search-by-author/search-by-author.component';
import { SearchByTitleComponent } from './search/search-by-title/search-by-title.component';
import { SearchByIdentifierComponent } from './search/search-by-identifier/search-by-identifier.component';
import { SearchMenuComponent } from './search/search-menu/search-menu.component';
import { SearchByAbstractFormComponent } from './search/search-by-abstract/search-by-abstract-form/search-by-abstract-form.component';
import { SearchByAuthorFormComponent } from './search/search-by-author/search-by-author-form/search-by-author-form.component';
// tslint:disable-next-line:max-line-length
import { SearchByIdentifierFormComponent } from './search/search-by-identifier/search-by-identifier-form/search-by-identifier-form.component';
import { SearchByTitleFormComponent } from './search/search-by-title/search-by-title-form/search-by-title-form.component';
import { PublicationService } from './services/publications.service';
import { DropdownDirective } from './shared/dropdown.directive';
import { FindFilterFormComponent } from './find/find-filter-form/find-filter-form.component';
import { FooterComponent } from './footer/footer.component';
import { FindMainComponent } from './find/find-main/find-main.component';
import { FindListComponent } from './find/find-main/find-list/find-list.component';
import { FindDetailComponent } from './find/find-main/find-detail/find-detail.component';
import { IdentifierDetailComponent } from './search/search-by-identifier/identifier-detail/identifier-detail.component';
import { AbstractDetailComponent } from './search/search-by-abstract/abstract-detail/abstract-detail.component';
import { AbstractListComponent } from './search/search-by-abstract/abstract-list/abstract-list.component';
import { AuthorsListComponent } from './util/templates/authors-list/authors-list.component';
import { TitleListComponent } from './search/search-by-title/title-list/title-list.component';
import { TitleDetailComponent } from './search/search-by-title/title-detail/title-detail.component';
import { PublicationAPIService } from './services/publication-api.service';
import { MessageService } from './services/message-service.service';
import { HttpClientModule } from '@angular/common/http';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FindComponent,
    MainPageComponent,
    SearchComponent,
    PublicationListComponent,
    PublicationDetailComponent,
    SearchByAbstractComponent,
    SearchByAuthorComponent,
    SearchByTitleComponent,
    SearchByIdentifierComponent,
    SearchMenuComponent,
    SearchByAbstractFormComponent,
    SearchByAuthorFormComponent,
    SearchByIdentifierFormComponent,
    SearchByTitleFormComponent,
    DropdownDirective,
    FindFilterFormComponent,
    FooterComponent,
    FindMainComponent,
    FindListComponent,
    FindDetailComponent,
    IdentifierDetailComponent,
    AbstractDetailComponent,
    AbstractListComponent,
    AuthorsListComponent,
    TitleListComponent,
    TitleDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [
    PublicationService,
    FormsInputsService,
    FilterService,
    PublicationAPIService,
    MessageService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
