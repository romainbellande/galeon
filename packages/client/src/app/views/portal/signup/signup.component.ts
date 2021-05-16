/* eslint-disable @typescript-eslint/unbound-method */
import { Component } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.scss'],
})
export class SignupComponent {
  form: FormGroup;

  constructor(public translate: TranslateService) {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.required, Validators.email]),
      pseudo: new FormControl('', Validators.required),
      password: new FormControl('', [
        Validators.required,
        Validators.pattern(
          /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/
        ),
      ]),
    });
  }

  onSubmit(): void {
    console.info(this.form.value);
  }

  isInvalid(control: AbstractControl | null): boolean {
    console.log('control :>> ', control);
    return !!(control && control.invalid && (control.dirty || control.touched));
  }

  get email(): AbstractControl | null {
    return this.form.get('email');
  }

  get pseudo(): AbstractControl | null {
    return this.form.get('pseudo');
  }

  get password(): AbstractControl | null {
    return this.form.get('password');
  }
}
