import {
  Component,
  ComponentFactoryResolver,
  Inject,
  ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AlertComponent } from '../shared/alert/alet.component';
import { PlaceHolderDirective } from '../shared/placeHolder/placeholder.directive';

import { AuthResponseData, AuthService } from './auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
})
export class AuthComponent {
  @ViewChild(PlaceHolderDirective, { static: false })
  alertHost: PlaceHolderDirective;

  isLoggedIn = true;
  isLoading = false;
  error: string = null;

  constructor(
    private authService: AuthService,
    private router: Router,
    private componentFactoryResolver: ComponentFactoryResolver
  ) {}

  onSwitch() {
    this.isLoggedIn = !this.isLoggedIn;
  }
  onSubmit(form: NgForm) {
    if (!form.valid) {
      return;
    }
    console.log('Submitting...');
    console.log(form.value);

    const email = form.value.email;
    const password = form.value.password;

    let authObs: Observable<AuthResponseData>;

    this.isLoading = true;

    if (this.isLoggedIn) {
      authObs = this.authService.login(email, password);
    } else {
      authObs = this.authService.signup(email, password);
    }
    authObs.subscribe(
      (resData) => {
        console.log(resData);
        this.router.navigate(['/recipes']);
        this.isLoading = false;
      },
      (errorMessage) => {
        console.log(errorMessage);
        this.error = errorMessage;
        this.showErrorAlert(errorMessage);
        this.isLoading = false;
      }
    );
    form.reset();
  }
  onHandleError() {
    this.error = null;
  }

  private showErrorAlert(message: string) {
    // const alertComp = new AlertComponent();

    const alertCmpFactory =
      this.componentFactoryResolver.resolveComponentFactory(AlertComponent);
    const hostViewContainerRef = this.alertHost.viewContainerRef;
    hostViewContainerRef.clear();
    hostViewContainerRef.createComponent(alertCmpFactory);
  }
}
