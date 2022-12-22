import { HttpErrorResponse } from '@angular/common/http';
import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { User } from 'src/app/interfaces/user';
import { ErrorService } from 'src/app/services/error.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css']
})
export class SignInComponent {
  username: string = '';
  password: string = '';
  confirmPassword: string = '';
  nombre: string = '';
  apellido_paterno: string = '';
  apellido_materno: string = '';
  loading: boolean = false;

  constructor(private toastr: ToastrService,
    private _userService: UserService,
    private _errorService: ErrorService,
    private router: Router
  ) {


  }

  addUser() {
    //Validar los valores
    if (this.username == '' || this.password == '' || this.confirmPassword == '' || this.nombre == '' || this.apellido_paterno == '' || this.apellido_materno == '') {
      this.toastr.error('Todos los campos son obligatorios !', 'Error');
      return;
    }

    //Validar la cantidad de caracteres del password y confirm password
    if ((this.password.length > 0 && this.password.length < 5) && (this.confirmPassword.length > 0 && this.confirmPassword.length < 5)) {
      this.toastr.error('La contraseña debe tener un minimo de 5 caracteres', 'Error');
      return;
    }

    //Validar que las password son iguales
    if (this.password != this.confirmPassword) {
      this.toastr.error('La contraseña no coincide con la repetida', 'Error');
      return;
    }

    // Crear al usuarop

    const user: User = {
      IdUser: 0,
      rol: 'copropietario',
      username: this.username,
      password: this.password,
      nombre: this.nombre,
      apellido_paterno: this.apellido_paterno,
      apellido_materno: this.apellido_materno
    }


    this.loading = true;
    this._userService.signIn(user).subscribe({
      next: (v) => {
        this.loading = false;
        this.toastr.success(`El usuario ${this.username} fue registrado con exito`, 'Usuario registrado!');
        this.router.navigate(['/login']);
      },
      error: (e) => {
        this.loading = false;
        this._errorService.msjError(e);
      }
      //,complete: () => console.log('Complete')
    })

  }

}
