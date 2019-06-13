import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';

import { AppComponent } from './app.component';

import { MainPageComponent, LoginComponent, RegisterComponent} from './main-page';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { FindComponent, FindFilterFormComponent, FindMainComponent, FindListComponent, FindDetailComponent  } from './find';
import { SearchComponent } from './search/search.component';
import { SearchMenuComponent } from './search/search-menu/search-menu.component';
import { SearchByAbstractComponent, SearchByAbstractFormComponent, AbstractDetailComponent, AbstractListComponent } from './search/search-by-abstract/';
import { SearchByAuthorComponent, SearchByAuthorFormComponent } from './search/search-by-author';
import { SearchByTitleComponent, SearchByTitleFormComponent, TitleListComponent, TitleDetailComponent } from './search/search-by-title';
import { SearchByIdentifierComponent, SearchByIdentifierFormComponent, IdentifierDetailComponent } from './search/search-by-identifier';

import { PublicationService, PublicationAPIService, MessageService, fakeBackendProvider, FilterService, FormsInputsService} from './services';
import { DropdownDirective, AlertComponent } from './shared';
import { AuthorsListComponent, PublicationListComponent, PublicationDetailComponent, JwtInterceptor, ErrorInterceptor } from './util';




@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent, LoginComponent, RegisterComponent,
    HeaderComponent,
    FooterComponent,
    FindComponent, FindFilterFormComponent, FindMainComponent, FindListComponent, FindDetailComponent,
    FindComponent,
    SearchComponent,
    SearchMenuComponent,
    SearchByAbstractComponent, SearchByAbstractFormComponent, AbstractDetailComponent, AbstractListComponent,
    SearchByAuthorComponent, SearchByAuthorFormComponent,
    SearchByTitleComponent, SearchByTitleFormComponent, TitleListComponent, TitleDetailComponent,
    SearchByIdentifierComponent, SearchByIdentifierFormComponent, IdentifierDetailComponent,
    DropdownDirective, AlertComponent,
    AuthorsListComponent, PublicationListComponent, PublicationDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgxPaginationModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
  ],
  providers: [
    FormsInputsService,
    FilterService,
    PublicationAPIService,
    MessageService,
    fakeBackendProvider,
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    fakeBackendProvider,// FIXME: declared again below to prevent bug
    PublicationService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
