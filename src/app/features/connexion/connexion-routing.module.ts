import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RegistrationComponent } from './components/registration/registration.component';
import { BoardingComponent } from './components/boarding/boarding.component';
import { LoginComponent } from '../../auth/components/login/login.component';

const routes: Routes = [
  { path: '', component: BoardingComponent },
  { path: 'registration', component: RegistrationComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionRoutingModule {}
