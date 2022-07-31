import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggedIn = true;

  constructor(private authService: AuthService) {}

  onSwitch() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) return;
    console.log('Submitting...');
    console.log(form.value);

    const email = form.value.email;
    const password = form.value.password;

    if (this.isLoggedIn) {
      //..
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
        },
        (error) => {
          console.log(error.message);
        }
      );
    }
    form.reset();
  }
}
