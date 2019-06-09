import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MessageService } from './message-service.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


@Injectable()

export class PublicationAPIService {
  private server: string = 'http://10.0.2.15';
  private serverApp: string = '/nanoTest';
  private servicesPath: string = '/service.php?object=nano';
  private serviceName: string = '&option=list';
  private body: any;
  private wsUrl: string;
  // http://10.0.2.15/nanoTest/service.php?object=nano&option=list

  //  http://10.0.2.15
  //  /nanoTest
  //  /service.php?object=nano
  //  &option=list

  constructor(  private http: HttpClient,
                private messageService: MessageService) {
    this.wsUrl = this.server + this.serverApp + this.servicesPath
  }


  getAllPublications(): Observable<any> {
    let  url = '&option=list';
    url = this.wsUrl + url;
    
    return this.http.get(url)
      .pipe( catchError( this.handleError<any>('getAllPublications', []) ));
  }



  private handleError<T>(operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      this.log(`${operation} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return of (result as T);
    };
  }

  private log(message: string) {
    this.messageService.add(`HeroService: ${message}`);
  }
      
}
