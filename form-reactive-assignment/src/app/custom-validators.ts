// import {  FormControl } from "@angular/forms"

import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';

export class CustomValidators {
  //   static: invalidProjectName(control: FormControl): {[s: string]:boolean}{
  //     if(control.value === "Test") {
  //       return {"invalidProjectName": true};
  //     }
  //     return null
  //   }
  // adding async
  static asyncInvalidProjectEmail(control: FormControl) {
    const promise = new Promise((resolve, reject) => {
      setTimeout(() => {
        if (control.value === 'Test@abv.bg') {
          resolve({ invalidProjectEmail: true });
        } else {
          resolve(null);
        }
      }, 2000);
    });
  }
}
