import { Injectable } from '@angular/core';
import{ HttpClient,HttpErrorResponse} from '@angular/common/http'
import { Clogin } from './clogin';
import {catchError, map} from 'rxjs/operators';
import {throwError,Observable} from 'rxjs'

@Injectable({
  providedIn: 'root'
})
export class LoginService {
 private LoginStatus = false;
_url = 'http://localhost:8000/ehsmlogin';
  constructor(private _http:HttpClient) { }

   setLogggedIn(value: boolean){
      this.LoginStatus = value;
      //localStorage.setItem('loggedIn','true')
  }

  get isLoggedIn(){
    return this.LoginStatus;
  }
  customerLogin(requestOptions) {
    console.log(requestOptions);
    return fetch("http://localhost:8000/customerlogin",requestOptions)
  }
  vendorLogin(requestOptions) {
    console.log(requestOptions);
    return fetch("http://localhost:8000/vendorlogin",requestOptions)
     
  }
  employeeLogin(requestOptions) {
    console.log(requestOptions);
    return fetch("http://localhost:8000/employeelogin",requestOptions)
     
  }
   getData(requestOptions) {
    console.log(requestOptions);
    return fetch("http://localhost:8000/list",requestOptions)
  }
  ehsmLogin(requestOptions) {
    console.log(requestOptions);
    return fetch("http://localhost:8000/ehsmlogin",requestOptions)
     
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }

  /*login (clogin:Clogin){
   return this._http.post<any>(this._url,clogin)
      .pipe(catchError(this.errorHandler))
  }
  errorHandler(error : HttpErrorResponse){
    return throwError(error);
  }*/
}