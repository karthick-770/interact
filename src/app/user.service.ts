import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
interface isLoggedIn{
  status: boolean;
}
@Injectable({
  providedIn: 'root'
})
export class UserService {
  
  constructor(private http:HttpClient) { }

  isLoggedIn(): Observable<isLoggedIn>{ 
    return this.http.get<isLoggedIn>('/isloggedin')
  }
}
