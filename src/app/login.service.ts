import { Injectable } from '@angular/core';
import{ HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Clogin } from './clogin';
import {catchError} from 'rxjs/operators';
import {throwError} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
_url = 'http://localhost:4200/customerlogin';
  constructor(private _http:HttpClient) { }
  
  login (clogin:Clogin){
   return this._http.post<any>(this._url,clogin)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }
}