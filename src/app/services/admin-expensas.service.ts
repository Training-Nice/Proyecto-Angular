import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AdminExpensasService {
  private myAppUrl: string ;
  private myApiUrl: string ;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.baseUrl;
    this.myApiUrl = 'api/AdministracionExpensas';
    
  }

  getDeudasExpensaByUser(idUser:number): Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/userExpensas/${idUser}`);
  }
  
}
