import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () =>
      import('./features/social-media/social-media.module').then(
        (m) => m.SocialMediaModule
      ),
  },
  {
    path: 'connexion',
    loadChildren: () =>
      import('./features/connexion/connexion.module').then(
        (m) => m.ConnexionModule
      ),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
