import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { UserService } from './services/user.service';
import { ImagePreviewService } from './services/image-preview.service';
import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { NgOptimizedImage } from '@angular/common';
import { ConfirmDialogModule } from './dialog/dialog.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    NgOptimizedImage,
    ConfirmDialogModule,
  ],
  exports: [
    MaterialModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgOptimizedImage,
    ConfirmDialogModule,
    CommonModule,
  ],
  providers: [UserService, ImagePreviewService],
})
export class SharedModule {}
