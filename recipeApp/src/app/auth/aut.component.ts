import { Component, Inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggedIn = true;
  isLoading = false;
  error: string = null;

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

    this.isLoading = true;

    if (this.isLoggedIn) {
      //..
    } else {
      this.authService.signup(email, password).subscribe(
        (resData) => {
          console.log(resData);
          this.isLoading = false;
        },
        (error) => {
          this.error = 'An error occured!';
          this.isLoading = false;
        }
      );
    }
    form.reset();
  }
}
