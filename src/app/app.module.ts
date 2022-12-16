import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


// Modulos
import {HttpClientModule} from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { ToastrModule } from 'ngx-toastr';


// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';


import { CondominioComponent } from './components/condominio/condominio.component';
import { HomeComponent } from './pages/home/home.component';
import { CopropietarioTableComponent } from './components/copropietario-table/copropietario-table.component';
import { CopropietarioHomePageComponent } from './pages/copropietario/copropietario-home-page/copropietario-home-page.component';
import { AdminHomePageComponent } from './pages/administrador/admin-home-page/admin-home-page.component';
import { CopropietarioGeneralComponent } from './pages/administrador/copropietario-general/copropietario-general.component';
import { EstadoCuentasComponent } from './pages/copropietario/estado-cuentas/estado-cuentas.component';
import { ModaldeudasComponent } from './components/deudas/modaldeudas/modaldeudas.component';
import { ModalexpensasComponent } from './components/expensas/modalexpensas/modalexpensas.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ModalEdithComponent } from './components/deudas/modal-edith/modal-edith.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignInComponent,
    DashboardComponent,
    NavbarComponent,
    SpinnerComponent,
    CondominioComponent,
    HomeComponent,
    CopropietarioTableComponent,
    CopropietarioHomePageComponent,
    AdminHomePageComponent,
    CopropietarioGeneralComponent,
    EstadoCuentasComponent,
    ModaldeudasComponent,
    ModalexpensasComponent,
    ModalEdithComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot({
      timeOut: 4000,
      positionClass: 'toast-bottom-right',
      preventDuplicates: true,
    }), NgbModule // ToastrModule added
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
