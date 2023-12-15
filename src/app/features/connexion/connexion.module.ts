import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CdkStepperModule } from '@angular/cdk/stepper';
import { ConnexionLayoutComponent } from './components/connexion-layout/connexion-layout.component';
import { Step1Component } from './components/registration/step-1/step-1.component';
import { Step2Component } from './components/registration/step-2/step-2.component';
import { Step3Component } from './components/registration/step-3/step-3.component';
import { Step4Component } from './components/registration/step-4/step-4.component';
import { Step5Component } from './components/registration/step-5/step-5.component';
import { ConnexionRoutingModule } from './connexion-routing.module';
import { BoardingComponent } from './components/boarding/boarding.component';
import { LoginComponent } from './components/login/login.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckboxService } from './services/checkbox.service';

@NgModule({
  declarations: [
    ConnexionLayoutComponent,
    Step1Component,
    Step2Component,
    Step3Component,
    Step4Component,
    Step5Component,
    BoardingComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule,
    CdkStepperModule,
    ConnexionRoutingModule,
    SharedModule,
  ],
  providers: [CheckboxService],
})
export class ConnexionModule {}
