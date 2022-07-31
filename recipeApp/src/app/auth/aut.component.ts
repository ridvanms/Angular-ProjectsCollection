import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  isLoggedIn = true;

  onSwitch() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  onSubmit(form: NgForm) {
    console.log('Submitting...');
    console.log(form.value);
    form.reset();
  }
}
