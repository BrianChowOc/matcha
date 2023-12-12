import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ConnexionLayoutComponent } from './components/connexion-layout/connexion-layout.component';

const routes: Routes = [{ path: '', component: ConnexionLayoutComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ConnexionRoutingModule {}
