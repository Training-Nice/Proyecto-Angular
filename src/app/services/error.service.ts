import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class ErrorService {

  constructor(private toastr:ToastrService) { }


  msjError(e: HttpErrorResponse){
    //corregir error TIMEOUT
    if(e.error.msg && e.error.statusText!='Not Found'){
      console.log(e);
      this.toastr.error(e.error.msg , 'Error');
    }else{
      this.toastr.error('Ups ocurrio un error, comuniquese con el administrador', 'Error');
    }
  }
}
