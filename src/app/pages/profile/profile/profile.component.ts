import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, Subscription, tap } from 'rxjs';
import { User } from 'src/app/core/models/user.model';
import { UserService } from 'src/app/core/services/user.service';
import { CheckboxService } from '../../services/checkbox.service';
import { ImagePreviewService } from 'src/app/core/services/image-preview.service';
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
  private userSubscription: Subscription | undefined;
  user$!: Observable<User>;
  user!: User;

  userImage!: string | File | ArrayBuffer | null | undefined;
  userImageUpdate!: File;

  coverImage!: string | File | ArrayBuffer | null | undefined;
  coverImageUpdate!: File;

  imageTab: (string | File | ArrayBuffer | null | undefined)[] = [
    '',
    '',
    '',
    '',
  ];
  image1Udpate!: File;
  image2Udpate!: File;
  image3Udpate!: File;
  image4Udpate!: File;

  checkboxRows!: { label: string }[][];

  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  informationsForm!: FormGroup;

  interestsForm!: FormGroup;
  interests: { [key: string]: boolean[] } = {
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
  };

  profilForm!: FormGroup;

  biographieCtrl!: FormControl;

  mainForm!: FormGroup;
  datePipe: any;

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private checkboxService: CheckboxService,
    private imagePreviewService: ImagePreviewService,
    private authService: AuthService,
    private router: Router,
    public dialog: MatDialog
  ) {}

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  ngOnInit(): void {
    this.user$ = this.userService.ownUser$;
    this.userSubscription = this.user$.subscribe((user) => {
      this.user = user;
      this.coverImage = this.user.backgroundImage;
      this.userImage = this.user.profilImg;
      this.initImages();
      this.initInformationsForm(
        user.information.username,
        user.information.email
      );
      this.initInterestsForm();
      this.initProfilForm(
        user.profil.genre,
        user.profil.sexualOrientation,
        user.profil.birth,
        user.profil.city
      );
      this.initBiographieCtrl(user.biographie);

      this.initMainForm();
      this.checkboxRows = this.checkboxService.checkboxRows;
    });
  }

  private initImages() {
    this.imageTab[0] = this.user.picture1;
    this.imageTab[1] = this.user.picture2;
    this.imageTab[2] = this.user.picture3;
    this.imageTab[3] = this.user.picture4;
  }

  private initInformationsForm(username: string, email: string): void {
    this.passwordCtrl = this.formBuilder.control('');
    this.confirmPasswordCtrl = this.formBuilder.control('');
    this.informationsForm = this.formBuilder.group({
      username: [username],
      email: [email],
      password: this.passwordCtrl,
    });
  }

  private initInterestsForm(): void {
    this.user.interests.forEach((interest) => {
      this.interests[interest] = [true];
    });
    this.interestsForm = this.formBuilder.group(this.interests);
  }

  private initProfilForm(
    genre: string,
    sexualOrientation: string,
    birth: string,
    city: string
  ): void {
    this.profilForm = this.formBuilder.group({
      genre: [genre],
      sexualOrientation: [sexualOrientation],
      birth: [birth.split('-').reverse().join('-')],
      city: [city],
    });
  }

  private initBiographieCtrl(biographie: string): void {
    this.biographieCtrl = this.formBuilder.control(biographie);
  }

  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
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
            switch (imageType) {
              case 0:
                this.imageTab[0] = this.imagePreviewService.getPreviewImage();
                this.image1Udpate = file;
                break;
              case 1:
                this.imageTab[1] = this.imagePreviewService.getPreviewImage();
                this.image2Udpate = file;
                break;
              case 2:
                this.imageTab[2] = this.imagePreviewService.getPreviewImage();
                this.image3Udpate = file;
                break;
              case 3:
                this.imageTab[3] = this.imagePreviewService.getPreviewImage();
                this.image4Udpate = file;
                break;
            }
          } else if (imageType === 'main') {
            this.userImage = this.imagePreviewService.getPreviewImage();
            this.userImageUpdate = file;
          } else if (imageType === 'cover') {
            this.coverImage = this.imagePreviewService.getPreviewImage();
            this.coverImageUpdate = file;
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
    if (typeof this.mainForm.value.profil.birth !== 'string') {
      this.mainForm.value.profil.birth = this.datePipe.transform(
        this.mainForm.value.profil.birth,
        'dd-MM-yyyy'
      );
    }
    const formData = new FormData();
    if (this.userImageUpdate) {
      formData.append('profilImg', this.userImageUpdate);
    }
    if (this.coverImageUpdate) {
      formData.append('backgroundImage', this.coverImageUpdate);
    }
    if (this.image1Udpate) {
      formData.append('picture1', this.image1Udpate);
    }
    if (this.image2Udpate) {
      formData.append('picture2', this.image2Udpate);
    }
    if (this.image3Udpate) {
      formData.append('picture3', this.image3Udpate);
    }
    if (this.image4Udpate) {
      formData.append('picture4', this.image4Udpate);
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
    if (this.userSubscription) {
      this.userSubscription.unsubscribe();
    }
  }
}
