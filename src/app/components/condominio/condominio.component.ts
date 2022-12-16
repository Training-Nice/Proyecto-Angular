import { Component } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Condominio } from 'src/app/interfaces/condominio';
import { CondominioService } from 'src/app/services/condominio.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-condominio',
  templateUrl: './condominio.component.html',
  styleUrls: ['./condominio.component.css']
})
export class CondominioComponent {
    loading:boolean;

    condominio:any;

     listCondominios:Condominio[] ;

    constructor(private _condominioService:CondominioService,
                private _errorService:ErrorService,
                private toastr: ToastrService, ) {
      this.loading=false;
      this.listCondominios = [];
      this.condominio='';

      this.initCondominios();
    }



    
    initCondominios(){

      this.loading = true;
      this._condominioService.getCondominios().subscribe({
        next:(data) => {
          this.loading = false;
          this.listCondominios = data.msg;
        },
        error: (error) =>{
          this._errorService.msjError(error);
          this.loading = false;
        }
      });
    }
    onClickCondominio(data:any){
        this.condominio = data;
    }
    visibleCopropietario(){
      return this.condominio!='';
    }

    resetCondominio(){
      this.condominio ='';
    }

}
