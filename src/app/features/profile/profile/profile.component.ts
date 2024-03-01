import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { CheckboxService } from '../../connexion/services/checkbox.service';
import { ImagePreviewService } from 'src/app/shared/services/image-preview.service';
import { AuthService } from 'src/app/core/services/auth.service';
import { DatePipe } from '@angular/common';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmDialogComponent } from 'src/app/shared/dialog/components/confirm-dialog/confirm-dialog.component';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  private updateUserSubscription: Subscription | undefined;
  private deleteUserSubscription: Subscription | undefined;

  userImage!: string | File | ArrayBuffer | null | undefined;
  userImageUpdate!: File;
  coverImage!: string | ArrayBuffer | null | undefined;
  userImageList: { [key: string]: string | ArrayBuffer | null } = {
    '0': null,
    '1': null,
    '2': null,
    '3': null,
  };

  checkboxRows!: { label: string }[][];
  user$!: Observable<User>;
  backgroundImageCtrl!: FormControl;

  picture1Ctrl!: FormControl;
  picture2Ctrl!: FormControl;
  picture3Ctrl!: FormControl;
  picture4Ctrl!: FormControl;
  pictureControls: FormControl[] = [];
  imageListForm!: FormGroup;

  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  informationsForm!: FormGroup;

  interestsForm!: FormGroup;
  profilForm!: FormGroup;

  biographieCtrl!: FormControl;

  mainForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private checkboxService: CheckboxService,
    private imagePreviewService: ImagePreviewService,
    private authService: AuthService,
    private datePipe: DatePipe,
    private router: Router,
    public dialog: MatDialog
  ) {}

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  ngOnInit(): void {
    this.user$ = this.userService.ownUser$;
    this.userService.getOwnUser();
    this.user$.subscribe((user) => {
      this.userImage = user.profilImg;
    });
    this.initPictureForm();
    this.initInterestsForm();
    this.initBiographieCtrl();
    this.initInformationsForm();
    this.initProfilForm();
    this.backgroundImageCtrl = this.formBuilder.control('');
    this.initMainForm();
    this.checkboxRows = this.checkboxService.checkboxRows;
  }

  private initPictureForm(): void {
    this.picture1Ctrl = this.formBuilder.control('');
    this.picture2Ctrl = this.formBuilder.control('');
    this.picture3Ctrl = this.formBuilder.control('');
    this.picture4Ctrl = this.formBuilder.control('');

    this.imageListForm = this.formBuilder.group({
      picture1: this.picture1Ctrl,
      picture2: this.picture2Ctrl,
      picture3: this.picture3Ctrl,
      picture4: this.picture4Ctrl,
    });

    this.pictureControls = [
      this.picture1Ctrl,
      this.picture2Ctrl,
      this.picture3Ctrl,
      this.picture4Ctrl,
    ];
  }

  private initInformationsForm(): void {
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control(
      '',
      Validators.required
    );
    this.informationsForm = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: this.passwordCtrl,
    });
  }

  private initInterestsForm(): void {
    this.interestsForm = this.formBuilder.group({
      sciences: [false],
      photography: [false],
      cooking: [false],
      music: [false],
      diy: [false],
      sport: [false],
      reading: [false],
      paint: [false],
      theater: [false],
      games: [false],
      travel: [false],
      fashion: [false],
    });
  }

  private initProfilForm(): void {
    this.profilForm = this.formBuilder.group({
      genre: ['', Validators.required],
      sexualOrientation: ['', Validators.required],
      birth: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  private initBiographieCtrl(): void {
    this.biographieCtrl = this.formBuilder.control('');
  }

  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
      backgroundImage: this.backgroundImageCtrl,
      imageList: this.imageListForm,
      information: this.informationsForm,
      profil: this.profilForm,
      biographie: this.biographieCtrl,
    });
  }

  onFileSelected(event: any, imageType: number | 'main' | 'cover'): void {
    const input = event.target;

    if (input.files && input.files[0]) {
      const file = input.files[0];

      this.imagePreviewService
        .setPreviewImageFromFile(file)
        .then(() => {
          if (typeof imageType === 'number') {
            this.userImageList[imageType] =
              this.imagePreviewService.getPreviewImage();
          } else if (imageType === 'main') {
            this.userImage = this.imagePreviewService.getPreviewImage();
            this.userImageUpdate = file;
          } else if (imageType === 'cover') {
            console.log('COVER');

            this.coverImage = this.imagePreviewService.getPreviewImage();
          }
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  getPreviewImage(): string | ArrayBuffer | null {
    return this.imagePreviewService.getPreviewImage();
  }

  initImageTab() {
    let tabImage = [];
    for (const key in this.imageListForm.value) {
      if (Object.prototype.hasOwnProperty.call(this.imageListForm.value, key)) {
        const value = this.imageListForm.value[key];
        tabImage.push(value);
      }
    }
    return tabImage;
  }

  setInterestsTab() {
    let interestTab: string[] = [];
    for (let key in this.interestsForm.value) {
      if (this.interestsForm.value[key]) {
        interestTab.push(key);
      }
    }
    return interestTab;
  }

  deleteUser() {
    this.deleteUserSubscription = this.userService
      .deleteUser(this.authService.getUserId())
      .subscribe();
    this.authService.logout();
    this.router.navigateByUrl('/connexion');
  }

  onSubmit(): void {
    this.mainForm.value.profil.birth = this.datePipe.transform(
      this.mainForm.value.profil.birth,
      'dd-MM-yyyy'
    );

    const formData = new FormData();
    if (this.userImageUpdate) {
      formData.append('profilImg', this.userImageUpdate);
    }
    formData.append('information', JSON.stringify(this.informationsForm.value));
    formData.append('profil', JSON.stringify(this.profilForm.value));
    formData.append('interests', JSON.stringify(this.setInterestsTab()));
    formData.append('biographie', this.biographieCtrl.value);

    this.updateUserSubscription = this.userService
      .updateUser(this.authService.getUserId(), formData)
      .subscribe(() => this.userService.getOwnUser());
  }

  openDialogForDeleteUser(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Confirmation',
        message: 'Are you sure you want to delete your profile?',
        confirmText: 'OK',
        cancelText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.deleteUser();
    });
  }

  openDialogForUpdateUser(): void {
    const dialogRef = this.dialog.open(ConfirmDialogComponent, {
      width: '250px',
      data: {
        title: 'Confirmation',
        message: 'Update your profile?',
        confirmText: 'OK',
        cancelText: 'Cancel',
      },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) this.onSubmit();
    });
  }

  ngOnDestroy(): void {
    if (this.updateUserSubscription) {
      this.updateUserSubscription.unsubscribe();
    }
    if (this.deleteUserSubscription) {
      this.deleteUserSubscription.unsubscribe();
    }
  }
}
