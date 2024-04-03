import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
} from '@angular/forms';
import { CheckboxService } from '../../../services/checkbox.service';
import { ImagePreviewService } from 'src/app/core/services/image-preview.service';
import { UserService } from 'src/app/core/services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { Subscription, tap } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  private userSubscription: Subscription | undefined;
  isLinear = false;
  checkboxRows!: { label: string }[][];
  checkboxRowsResponsive!: { label: string }[][];

  userImage!: File;

  interests: string[] = [];

  //----- Step1 data -----
  step1Form!: FormGroup;
  usernameCtrl!: FormControl;
  emailCtrl!: FormControl;
  passwordCtrl!: FormControl;

  //----- Step2 data -----
  step2Form!: FormGroup;

  step3Form!: FormGroup;

  step4Ctrl!: FormControl;

  mainForm!: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private checkboxService: CheckboxService,
    private imagePreviewService: ImagePreviewService,
    private userService: UserService,
    private router: Router,
    private datePipe: DatePipe
  ) {}

  ngOnInit(): void {
    this.initStep1Form();
    this.initStep2Form();
    this.initStep3Form();
    this.initStep4Form();
    this.initMainForm();
    this.checkboxRows = this.checkboxService.checkboxRows;
    this.checkboxRowsResponsive = this.checkboxService.checkboxRowsResponsive;
  }

  private initStep1Form(): void {
    this.usernameCtrl = this.formBuilder.control('', {
      validators: [Validators.required],
      updateOn: 'change',
    });
    this.emailCtrl = this.formBuilder.control('', {
      validators: [Validators.required, Validators.email],
      updateOn: 'change',
    });
    this.passwordCtrl = this.formBuilder.control('', {
      validators: [Validators.required, Validators.minLength(8)],
      updateOn: 'change',
    });
    this.step1Form = this.formBuilder.group({
      username: this.usernameCtrl,
      email: this.emailCtrl,
      password: this.passwordCtrl,
    });
  }

  private initStep2Form(): void {
    this.step2Form = this.formBuilder.group({
      genre: ['man'],
      sexualOrientation: ['heterosexual'],
      birth: ['', Validators.required],
      city: ['', Validators.required],
    });
  }

  private initStep3Form(): void {
    this.step3Form = this.formBuilder.group({
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

  private initStep4Form(): void {
    this.step4Ctrl = this.formBuilder.control('', [Validators.required]);
  }

  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
      information: this.step1Form,
      profil: this.step2Form,
      biographie: this.step4Ctrl,
    });
  }

  getFormControlErrorText(ctrl: AbstractControl | null) {
    if (ctrl?.hasError('required')) {
      return 'This field is required';
    } else if (ctrl?.hasError('email')) {
      return 'Please enter a valid email address';
    } else if (ctrl?.hasError('minlength')) {
      return 'Your password must be at least 8 characters long';
    }
    return 'this field contains an error';
  }

  onFileSelected(event: any): void {
    const input = event.target;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.imagePreviewService
        .setPreviewImageFromFile(file)
        .then(() => {
          this.userImage = file;
        })
        .catch((error) => {
          console.error(error);
        });
    }
  }

  getPreviewImage(): string | ArrayBuffer | null {
    return this.imagePreviewService.getPreviewImage();
  }

  formatedDate() {
    this.mainForm.value.profil.birth = this.datePipe.transform(
      this.mainForm.value.profil.birth,
      'dd-MM-yyyy'
    );
  }

  setInterestsTab() {
    let interestTab: string[] = [];
    for (let key in this.step3Form.value) {
      if (this.step3Form.value[key]) {
        interestTab.push(key);
      }
    }
    return interestTab;
  }

  onSubmit() {
    if (this.mainForm.valid) {
      this.formatedDate();
      const formData = new FormData();

      if (this.userImage) {
        formData.append('profilImg', this.userImage);
      }
      formData.append('information', JSON.stringify(this.step1Form.value));
      formData.append('profil', JSON.stringify(this.step2Form.value));
      formData.append('interests', JSON.stringify(this.setInterestsTab()));
      formData.append('biographie', this.step4Ctrl.value);
      this.userSubscription = this.userService
        .addUser(formData)
        .pipe(
          tap(
            (addedUser) => {
              console.log('User created', addedUser);
              this.mainForm.reset();
            },
            (error) => {
              console.error("Erreur lors de l'ajout de l'utilisateur: ", error);
            }
          )
        )
        .subscribe();
      this.router.navigateByUrl('/');
    }
  }

  ngOnDestroy(): void {
    if (this.userSubscription) this.userSubscription.unsubscribe();
  }
}
