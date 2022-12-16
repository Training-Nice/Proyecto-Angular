import { Component, Input, OnInit } from '@angular/core';
import { ToastrService } from 'ngx-toastr';
import { Condominio } from 'src/app/interfaces/condominio';
import { Copropietario } from 'src/app/interfaces/copropietario';
import { CopropietarioService } from 'src/app/services/copropietario.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-copropietario-table',
  templateUrl: './copropietario-table.component.html',
  styleUrls: ['./copropietario-table.component.css']
})
export class CopropietarioTableComponent implements OnInit{
  loading:boolean;
  @Input()moreinf:boolean;
  @Input() condominio!: Condominio;
  listCopropietarios:Copropietario[];

  constructor(private _copropietarioService:CopropietarioService,
              private _errorService:ErrorService,
              private toastr: ToastrService  
  ) {
    
    this.loading= false;
    this.listCopropietarios=[];
    this.moreinf=false;
  }
  ngOnInit() {
    this.getCopropietarios(this.condominio);

  }

  getCopropietarios(condominio:any){
    
    this.loading=true;
    if(condominio==undefined){
      //tal vez necesitemos una return OJO -.-
        this._copropietarioService.getCopropietariosInfoDetailDuedas().subscribe({
            next:(data) => {
              this.loading = false;
              this.listCopropietarios = data.msg;
              
            },
            error: (error) =>{
              this._errorService.msjError(error);
              this.loading = false;
            }
        });
    
    }else{
      this._copropietarioService.getCopropietariosInfoDetailDuedasByCondominio(condominio.idCondominio).subscribe({
        next:(data) => {
          this.loading = false;
          this.listCopropietarios = data.msg;
        },
        error: (error) =>{
          this._errorService.msjError(error);
          this.loading = false;
        }
    });
    }
  }

}
