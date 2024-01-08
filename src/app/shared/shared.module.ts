import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ImagePreviewService } from './services/image-preview.service';

@NgModule({
  declarations: [],
  imports: [CommonModule, ReactiveFormsModule],
  exports: [MaterialModule, FlexLayoutModule, ReactiveFormsModule],
  providers: [UserService, ImagePreviewService],
})
export class SharedModule {}
