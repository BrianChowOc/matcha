import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { CheckboxService } from '../../connexion/services/checkbox.service';
import { ImagePreviewService } from 'src/app/shared/services/image-preview.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userImage!: string | ArrayBuffer | null;
  coverImage!: string | ArrayBuffer | null | undefined;
  userImageList: { [key: string]: string | ArrayBuffer | null } = {
    '0': null,
    '1': null,
    '2': null,
    '3': null,
  };

  checkboxRows!: { label: string }[][];
  user$!: Observable<User>;

  mainPictureCtrl!: FormControl;

  coverPictureCtrl!: FormControl;

  picture1Ctrl!: FormControl;
  picture2Ctrl!: FormControl;
  picture3Ctrl!: FormControl;
  picture4Ctrl!: FormControl;
  pictureControls: FormControl[] = [];
  pictureForm!: FormGroup;

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
    private imagePreviewService: ImagePreviewService
  ) {}

  getObjectKeys(obj: any): string[] {
    return Object.keys(obj);
  }

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
    this.coverPictureCtrl = this.formBuilder.control('');
    this.mainPictureCtrl = this.formBuilder.control('');
    this.initImages();
    this.initPictureForm();
    this.initInterestsForm();
    this.initBiographieCtrl();
    this.initInformationsForm();
    this.initProfilForm();
    this.initMainForm();
    this.checkboxRows = this.checkboxService.checkboxRows;
  }

  private initPictureForm(): void {
    this.picture1Ctrl = this.formBuilder.control('');
    this.picture2Ctrl = this.formBuilder.control('');
    this.picture3Ctrl = this.formBuilder.control('');
    this.picture4Ctrl = this.formBuilder.control('');

    this.pictureForm = this.formBuilder.group({
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
      confirmPassword: this.confirmPasswordCtrl,
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
      coverPicture: this.coverPictureCtrl,
      mainPicture: this.mainPictureCtrl,
      pictureLst: this.pictureForm,
      information: this.informationsForm,
      interest: this.interestsForm,
      profil: this.profilForm,
      biographie: this.biographieCtrl,
    });
  }

  private initImages(): void {
    this.user$.subscribe((user) => {
      for (let i = 0; i < user.imageList.length; i++) {
        this.userImageList[i] = user.imageList[i];
      }
      this.userImage = user.imageUrl;
      this.coverImage = user.backgroundImage;
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
          } else if (imageType === 'cover') {
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

  onSubmit(): void {
    console.log('mainForm --> ', this.mainForm.value);
  }
}
