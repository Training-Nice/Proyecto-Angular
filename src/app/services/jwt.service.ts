import { Injectable } from '@angular/core';
import jwt_decode from "jwt-decode";

@Injectable({
  providedIn: 'root'
})
export class JtwService {

  constructor() { }
  DecodeToken(token: string): string {
    const data:any = jwt_decode(token);
    return data.name;
  }
}
