import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup;
  constructor() {}

  ngOnInit() {
    this.registerationForm = new FormGroup(
      {
        userName: new FormControl('', Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
        password: new FormControl(null, [
          Validators.required,
          Validators.minLength(8),
        ]),
        confirmPassword: new FormControl(null, Validators.required),
        mobile: new FormControl(null, [
          Validators.required,
          Validators.maxLength(10),
        ]),
      },
      this.passwordMatchingValidator
    );
  }
  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('password').value === fg.get('confirmPassword').value
      ? null
      : { notMatched: true };
  }
  get UserName() {
    return this.registerationForm.get('userName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get PassWord() {
    return this.registerationForm.get('password') as FormControl;
  }
  get Mobile() {
    return this.registerationForm.get('mobile') as FormControl;
  }
  get confirmPassWord() {
    return this.registerationForm.get('confirmPassword') as FormControl;
  }
  onSubmit() {
    console.log(this.registerationForm);
  }
}
