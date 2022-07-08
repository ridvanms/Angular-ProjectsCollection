import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // @ViewChild('f') signupForm: NgForm;
  defaultValue = 'pet';
  answer: string = '';
  genders = ['male', 'female'];

  suggestUserName(form: NgForm) {
    const suggestedName = 'Koko';
    form.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }
  onSubmit(form: NgForm) {
    console.log(form);
  }

  // onSubmit() {
  //   console.log(this.signupForm);
  // }
}
