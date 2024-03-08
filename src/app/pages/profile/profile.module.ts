import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ProfileRoutingModule } from './profile-routing.module';
import { ProfileComponent } from './profile/profile.component';
import { ProfileViewerComponent } from './profile-viewer/profile-viewer.component';
import { SharedModule } from 'src/app/shared/shared.module';
import { CheckboxService } from '../services/checkbox.service';

@NgModule({
  declarations: [ProfileComponent, ProfileViewerComponent],
  imports: [ProfileRoutingModule, SharedModule],
  providers: [CheckboxService],
})
export class ProfileModule {}
