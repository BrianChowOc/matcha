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

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss'],
})
export class ProfileComponent implements OnInit {
  userImageList!: string[];
  checkboxRows!: { label: string }[][];
  user$!: Observable<User>;

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

  constructor(
    private formBuilder: FormBuilder,
    private userService: UserService,
    private checkboxService: CheckboxService
  ) {}

  ngOnInit(): void {
    this.user$ = this.userService.getUser();
    this.initPictureForm();
    this.initInterestsForm();
    this.initBiographieCtrl();
    this.initInformationsForm();
    this.initProfilForm();
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
}
