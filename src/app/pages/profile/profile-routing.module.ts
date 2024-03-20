import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { ProfileViewerComponent } from './profile-viewer/profile-viewer.component';

const routes: Routes = [
  { path: '', component: ProfileComponent },
  { path: ':id', component: ProfileViewerComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ProfileRoutingModule {}
