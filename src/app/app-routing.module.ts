import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './components/admin/admin.component';
import { CondominioComponent } from './components/condominio/condominio.component';
import { CopropietarioComponent } from './components/copropietario/copropietario.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';

// Components
import { LoginComponent } from './components/login/login.component';
import { SignInComponent } from './components/sign-in/sign-in.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch:'full'},
  { path: 'login', component: LoginComponent},
  { path: 'signIn', component: SignInComponent},
  { path: 'dashboard', component: DashboardComponent},
  { path: 'admin', component: AdminComponent},
  { path: 'copropietario', component: CopropietarioComponent},
  { path: 'condominio', component: CondominioComponent},
  { path: '**', redirectTo: 'login', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
