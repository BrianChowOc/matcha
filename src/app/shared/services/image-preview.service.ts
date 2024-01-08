import { Injectable } from '@angular/core';

@Injectable()
export class ImagePreviewService {
  private previewImage: string | ArrayBuffer | null = null;

  setPreviewImageFromFile(file: File): Promise<void> {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();

      reader.onload = () => {
        this.previewImage = reader.result;
        resolve();
      };

      reader.onerror = () => {
        reject(new Error('Error reading file.'));
      };

      reader.readAsDataURL(file);
    });
  }

  getPreviewImage(): string | ArrayBuffer | null {
    return this.previewImage;
  }
}
