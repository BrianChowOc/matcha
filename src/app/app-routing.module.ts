import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './core/guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/social-media/social-media.module').then(
        (m) => m.SocialMediaModule
      ),
    canActivate: [AuthGuard],
  },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./features/connexion/connexion.module').then(
        (m) => m.ConnexionModule
      ),
  },
  {
    path: 'profile',
    loadChildren: () =>
      import('./features/profile/profile.module').then((m) => m.ProfileModule),
    canActivate: [AuthGuard],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
