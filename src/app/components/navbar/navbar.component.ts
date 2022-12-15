import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { JtwService } from 'src/app/services/jwt.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
    private rol:string;
    /**
     *
     */
    constructor(private router: Router,
                private jwt: JtwService 
    ) {

      let jwtLs= localStorage.getItem('token');
      this.rol = this.jwt.DecodeToken(jwtLs || 'Not Found');
    


    }

    logOut(){
      localStorage.removeItem('token');
      this.router.navigate(['/login']);
    }

    isAdmin(){
      return this.rol =='administrador';
    }
    isCopropopietario(){
      return this.rol =='copropietario';
    }
}
