import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SocialMediaRoutingModule } from './social-media-routing.module';
import { UserListItemComponent } from './components/user-list-item/user-list-item.component';
import { UserListComponent } from './components/user-list/user-list.component';
import { SharedModule } from '../../shared/shared.module';
import { UserService } from '../../shared/services/user.service';

@NgModule({
  declarations: [UserListItemComponent, UserListComponent],
  imports: [CommonModule, SocialMediaRoutingModule, SharedModule],
})
export class SocialMediaModule {}
