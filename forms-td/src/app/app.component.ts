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
  user = {
    username: '',
    email: '',
    secretQuestion: '',
    answer: '',
    gender: '',
  };

  suggestUserName(form: NgForm) {
    const suggestedName = 'Koko';
    form.form.patchValue({
      userData: {
        username: suggestedName,
      },
    });
  }

  onSubmit(form: NgForm) {
    this.user.username = form.value.userData.username;
    this.user.email = form.value.userData.email;
    this.user.secretQuestion = form.value.userData.secret;
    this.user.answer = form.value.userData.answer;
    this.user.gender = form.value.userData.gender;

    form.reset();
  }
//   submitting signupForm
  
  // onSubmit() {
  //   console.log(this.signupForm);
  // }
}
