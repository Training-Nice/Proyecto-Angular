import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.prod';
import { Observable } from 'rxjs';
@Injectable({
  providedIn: 'root'
})
export class CondominioService {
  private myAppUrl: string ;
  private myApiUrl: string ;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.baseUrl;
    this.myApiUrl = 'api/User';
    
  }

  getCondominios(): Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}`);
  }
}
