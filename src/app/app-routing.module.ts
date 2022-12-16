import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CondominioComponent } from './components/condominio/condominio.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';
import { AdminHomePageComponent } from './pages/administrador/admin-home-page/admin-home-page.component';
import { CopropietarioGeneralComponent } from './pages/administrador/copropietario-general/copropietario-general.component';

import { CopropietarioHomePageComponent } from './pages/copropietario/copropietario-home-page/copropietario-home-page.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin', component: AdminHomePageComponent},
  { path: 'copropietarioDetails', component: CopropietarioGeneralComponent},
  { path: 'copropietario', component: CopropietarioHomePageComponent},
  { path: 'condominio', component: CondominioComponent},
  { path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
