import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
    username: string = '';
    password: string = '';
    loading: boolean = false;
    /**
     *
     */
    constructor(private toastr: ToastrService,
                private _userService:UserService,
                private _errorService:ErrorService, 
                private router: Router,
    ) {
      
      
    }

    login(){

      // Validaciones
      if(this.username == '' || this.password == '' ){
        this.toastr.error('Todos los campos son obligatorios !', 'Error');
        return;
      }
      // Creamos el body
      const user:any = {
          username: this.username,
          password:this.password
      }
      
      this.loading = true;

      this._userService.login(user).subscribe({
        next:(data) => {
          let route='';
          data.rol == 'administrador'?  route='/admin':route='/copropietario' ;
          this.router.navigate([route])
          localStorage.setItem('token', data.token)
        },
        error: (error) =>{
          this._errorService.msjError(error);
          this.loading = false;
        }
      });
    }

}
