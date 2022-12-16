import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CopropietarioService {
  
  private myAppUrl: string ;
  private myApiUrl: string ;
  constructor(private http: HttpClient) { 
    this.myAppUrl = environment.baseUrl;
    this.myApiUrl = 'api/copropietario';
    
    
  }
  getCopropietariosInfoDetailDuedas(): Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/infoComplete`);
  }
  getCopropietariosInfoDetailDuedasByCondominio(id:number): Observable<any>{
    return this.http.get(`${this.myAppUrl}${this.myApiUrl}/infoComplete/condominio/${id}`);
  }
}
