import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { CustomValidators } from './custom-validators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  signupForm: FormGroup = new FormGroup({});

  ngOnInit() {
    this.signupForm = new FormGroup({
      email: new FormControl(null, [Validators.required, Validators.email]),
      status: new FormControl(null),
    });
    this.signupForm.setValue({
      email: 'max@abv.bg',
      status: 'stable',
    });
  }
  onSubmit() {
    console.log(this.signupForm);
  }
}
