import { Component ,Input} from '@angular/core';
import { AdminDeudasService } from 'src/app/services/admin-deudas.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-modaldeudas',
  templateUrl: './modaldeudas.component.html',
  styleUrls: ['./modaldeudas.component.css']
})
export class ModaldeudasComponent {
  loading:boolean;
  listDeudas:any[];
  @Input()idUser:number;


  constructor(private _serviceAdminDeudas: AdminDeudasService,
              private _errorService:ErrorService
    ) {
    this.loading=false;
    this.listDeudas=[];
    this.idUser=0;
    
  }
  convertFecha(fecha:any){
    return new Date(fecha).toLocaleDateString('en-US')
  }
  getDeudas(idUser:number){
    console.log(idUser);
    this._serviceAdminDeudas.getDeudasByUser(idUser).subscribe({
        next:(data) => {
          this.loading = false;
          this.listDeudas = data.msg;
          console.log(this.listDeudas);
        },
        error: (error) =>{
          this._errorService.msjError(error);
          this.loading = false;
        }
    });
  }

}
