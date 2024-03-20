import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import { MaterialModule } from './material.module';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ReactiveFormsModule } from '@angular/forms';
import { ImagePreviewService } from '../core/services/image-preview.service';
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
  providers: [ImagePreviewService, DatePipe],
})
export class SharedModule {}
