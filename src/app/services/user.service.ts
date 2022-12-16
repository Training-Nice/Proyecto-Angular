import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { User } from '../interfaces/user';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private myAppUrl: string ;
  private myApiUrl: string ;
  private myApiUrlAth: string ;

  constructor(private http: HttpClient) {
    this.myAppUrl = environment.baseUrl;
    this.myApiUrl = 'api/User';
    this.myApiUrlAth = 'api/auth';
  }

  signIn(user: User): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrl}`,user);
  }

  login(user: User): Observable<any>{
    return this.http.post(`${this.myAppUrl}${this.myApiUrlAth}`,user);
  }
}
