import { Component } from '@angular/core';
import { NgForm } from '@angular/forms';
// import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  defaultValue = 'Advanced';

  generateEmail(form: NgForm) {
    const suggestedName = 'Koko@gmail.com';
    form.form.patchValue({ userData: { email: suggestedName } });
  }
}
