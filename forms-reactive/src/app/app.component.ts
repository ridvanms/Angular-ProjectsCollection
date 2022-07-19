import { Component, OnInit } from '@angular/core';
import {
  EmailValidator,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  genders = ['male', 'female'];
  signupForm: FormGroup = new FormGroup({});
  // forbiddenUsernames = ['Chris', 'Anna'];

  ngOnInit() {
    this.signupForm = new FormGroup({
      userData: new FormGroup({
        // username: new FormControl(null, [Validators.required,this.forbiddenNames.bind(this)]),
        username: new FormControl(null, Validators.required),
        email: new FormControl(null, [Validators.required, Validators.email]),
      }),
      gender: new FormControl('male'),
      hobbies: new FormArray([]),
    });

    // this.signupForm.valueChanges.subscribe((value) => console.log(value));
    this.signupForm.statusChanges.subscribe((status) => console.log(status));

    // setting and Patching values
    this.signupForm.setValue({
      userData: {
        username: 'Max',
        email: 'Max@gmail.com',
      },
      gender: 'male',
      hobbies: [],
    });

    this.signupForm.patchValue({
      userData: {
        username: 'Anna',
        email: 'Anna@abv.bg',
      },
      gender: 'female',
      hobbies: ['Swimming'],
    });
  }
  onSubmit() {
    console.log(this.signupForm);
    this.signupForm.reset({
      gender: 'male',
    });
  }
  onAddHobby() {
    const control = new FormControl(null, Validators.required);
    (<FormArray>this.signupForm.get('hobbies')).push(control);
  }
  getControls() {
    return (<FormArray>this.signupForm.get('hobbies')).controls;
  }

  // forbiddenNames(control: FormControl): {[s: string]:boolean}{
  //   if(this.forbiddenUsernames.indexOf(control.value){
  //     return {'nameIsForbidden': true};
  //   })
  //   return null
  // }

  forbiddenEmails(control: FormControl): Promise<any> | Observable<any> {
    const promise = new Promise<any>((resolve, reject) => {
      setTimeout(() => {
        console.log(control);
        if (control.value === 'test@test.com') {
          resolve({ emailIsForbidden: true });
        } else {
          resolve(null);
        }
      }, 1500);
    });
    return promise;
  }
}
