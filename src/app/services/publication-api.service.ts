import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message-service.service';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators'; 


@Injectable()

export class PublicationAPIService {
  // http://10.0.2.15/nanoTest/service.php?object=publication&option=list
  // /nanoTest/service.php?object=publication&option=list
  private server: string = 'http://10.0.2.15';
  private serverApp: string = '/nanoTest';
  private servicesPath: string = '/service.php?object=publication';
  private wsUrl: string;
  
  
  private headerDict: { 'Content-Type': string;
                        'Accept': string;
                        'Access-Control-Allow-Headers': string; };
  private requestedOptions: { headers: HttpHeaders; };




  constructor(  private http: HttpClient,
                private messageService: MessageService) {
    this.wsUrl = this.server + this.serverApp + this.servicesPath

    this.headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
    }
    this.requestedOptions = {                                                                                                                                                                                 
      headers: new HttpHeaders(this.headerDict), 
    };

  }

  getAllPublications(): Observable<any> {                                                                                                                                   
    let  serviceName = '&option=list';
    let url = this.wsUrl + serviceName;
    return this.http
     .get(url)
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
