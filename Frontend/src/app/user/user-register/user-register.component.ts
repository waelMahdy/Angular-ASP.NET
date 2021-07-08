import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { User } from 'src/app/model/user';
import { AlertifyService } from 'src/app/services/alertify.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
  styleUrls: ['./user-register.component.css'],
})
export class UserRegisterComponent implements OnInit {
  registerationForm: FormGroup;
  user: User;
  userSubmitted: boolean;
  constructor(
    private fb: FormBuilder,
    private userService: UserService,
    private alertifyService: AlertifyService
  ) {}

  ngOnInit() {
    // this.registerationForm = new FormGroup(
    //   {
    //     userName: new FormControl('', Validators.required),
    //     email: new FormControl(null, [Validators.required, Validators.email]),
    //     password: new FormControl(null, [
    //       Validators.required,
    //       Validators.minLength(8),
    //     ]),
    //     mobile: new FormControl(null, [
    //       Validators.required,
    //       Validators.maxLength(10),
    //     ]),
    //     confirmPassword: new FormControl(null, Validators.required),
    //   },
    //   this.passwordMatchingValidator
    // );
    this.createRegisterationForm();
  }
  createRegisterationForm() {
    this.registerationForm = this.fb.group(
      {
        UserName: [null, Validators.required],
        Mobile: [null, [Validators.required, Validators.maxLength(10)]],
        PassWord: [null, [Validators.required, Validators.minLength(8)]],
        confirmPassWord: [null, Validators.required],
        email: [null, [Validators.required, Validators.email]],
      },
      { validators: this.passwordMatchingValidator }
    );
  }

  passwordMatchingValidator(fg: FormGroup): Validators {
    return fg.get('PassWord').value === fg.get('confirmPassWord').value
      ? null
      : { notMatched: true };
  }
  get UserName() {
    return this.registerationForm.get('UserName') as FormControl;
  }
  get email() {
    return this.registerationForm.get('email') as FormControl;
  }
  get PassWord() {
    return this.registerationForm.get('PassWord') as FormControl;
  }
  get Mobile() {
    return this.registerationForm.get('Mobile') as FormControl;
  }
  get confirmPassWord() {
    return this.registerationForm.get('confirmPassWord') as FormControl;
  }
  onSubmit() {
    console.log(this.registerationForm);
    this.userSubmitted = true;
    if (this.registerationForm.valid) {
      //.user = Object.assign(this.user, this.registerationForm.value);
      this.userService.addUser(this.userData());
      this.registerationForm.reset();
      this.userSubmitted = false;
      this.alertifyService.success('User has been added');
    } else {
      this.alertifyService.error('Something went wrong');
    }
  }

  userData(): User {
    return (this.user = {
      userName: this.UserName.value,
      Email: this.email.value,
      password: this.PassWord.value,
      mobile: this.Mobile.value,
    });
  }
}
