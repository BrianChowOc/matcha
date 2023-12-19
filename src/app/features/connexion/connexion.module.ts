import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ConnexionRoutingModule } from './connexion-routing.module';
import { BoardingComponent } from './components/boarding/boarding.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckboxService } from './services/checkbox.service';
import { MatStepperModule } from '@angular/material/stepper';
import { RegistrationComponent } from './components/registration/registration.component';
import { ConnexionLayoutComponent } from './components/connexion-layout/connexion-layout.component';

@NgModule({
  declarations: [RegistrationComponent, BoardingComponent, LoginComponent, ConnexionLayoutComponent],
  imports: [
    CommonModule,
    ConnexionRoutingModule,
    SharedModule,
    MatStepperModule,
  ],
  providers: [CheckboxService],
})
export class ConnexionModule {}
