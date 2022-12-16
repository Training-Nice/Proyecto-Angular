import { Component,Input, OnInit } from '@angular/core';
import { AdminExpensasService } from 'src/app/services/admin-expensas.service';
import { ErrorService } from 'src/app/services/error.service';

@Component({
  selector: 'app-modalexpensas',
  templateUrl: './modalexpensas.component.html',
  styleUrls: ['./modalexpensas.component.css']
})
export class ModalexpensasComponent implements OnInit{
    loading:boolean;
    listExpensa:any[];
    @Input()idUser:number;

    
    constructor(private _expesasService: AdminExpensasService,
                private _errorService:ErrorService) {
      this.loading=false;
      this.idUser= 0;
      this.listExpensa=[];
    }


    ngOnInit() {
      
      
    }
    clickOther(){
      console.log('first');
    }
    convertFecha(fecha:any){
      return new Date(fecha).toLocaleDateString('en-US')
    }
    getDeudasExpensaByUser(idUser:number){
      this.loading = true;
      console.log(idUser);
      this._expesasService.getDeudasExpensaByUser(idUser).subscribe({
        next:(data) => {
          this.loading = false;
          this.listExpensa = data.msg;
          console.log(this.listExpensa);
        },
        error: (error) =>{
          this._errorService.msjError(error);
          this.loading = false;
        }
      });
    }

}
