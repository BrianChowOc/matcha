import { Component, OnInit } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormBuilder,
  Validators,
} from '@angular/forms';
import { CheckboxService } from '../../services/checkbox.service';
import { ImagePreviewService } from 'src/app/shared/services/image-preview.service';
import { User } from 'src/app/shared/models/user.model';
import { UserService } from 'src/app/shared/services/user.service';
import { Router } from '@angular/router';
import { DatePipe } from '@angular/common';
import { tap } from 'rxjs';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.scss'],
})
export class RegistrationComponent implements OnInit {
  isLinear = false;
  checkboxRows!: { label: string }[][];

  userImage!: File;

  interests: string[] = [];

  passwordCtrl!: FormControl;
  confirmPasswordCtrl!: FormControl;
  step1Form!: FormGroup;

  step2Form!: FormGroup;

  step3Form!: FormGroup;

  step4Ctrl!: FormControl;

  step5Ctrl!: FormControl;

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
    this.initStep5Ctrl();
    this.initMainForm();
    this.checkboxRows = this.checkboxService.checkboxRows;
  }

  private initStep1Form(): void {
    this.passwordCtrl = this.formBuilder.control('', Validators.required);
    this.confirmPasswordCtrl = this.formBuilder.control(
      '',
      Validators.required
    );
    this.step1Form = this.formBuilder.group({
      username: ['', Validators.required],
      email: ['', Validators.required],
      password: this.passwordCtrl,
    });
  }

  private initStep2Form(): void {
    this.step2Form = this.formBuilder.group({
      genre: ['', Validators.required],
      sexualOrientation: ['', Validators.required],
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
    this.step4Ctrl = this.formBuilder.control('');
  }

  private initStep5Ctrl(): void {
    this.step5Ctrl = this.formBuilder.control('');
  }

  private initMainForm(): void {
    this.mainForm = this.formBuilder.group({
      information: this.step1Form,
      profil: this.step2Form,
      biographie: this.step4Ctrl,
      profilImg: this.step5Ctrl,
    });
  }

  onFileSelected(event: any): void {
    const input = event.target;

    if (input.files && input.files[0]) {
      const file = input.files[0];
      this.imagePreviewService
        .setPreviewImageFromFile(file)
        .then(() => {
          this.userImage = file;
          this.step5Ctrl.setValue(file);
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
      const newUser: User = {
        ...this.mainForm.value,
        interests: this.setInterestsTab(),
      };

      this.userService
        .addUser(newUser)
        .pipe(
          tap(
            (addedUser) => {
              console.log('User created', addedUser);
              this.mainForm.reset();
            },
            (error) => {
              console.error(
                "Erreur lors de l'ajout de l'utilisateur : ",
                error
              );
            }
          )
        )
        .subscribe();
      this.router.navigateByUrl('/');
    }
  }
}
