import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { BoardingComponent } from './components/boarding/boarding.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [
  { path: '', component: BoardingComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'login', component: LoginComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionRoutingModule {}
