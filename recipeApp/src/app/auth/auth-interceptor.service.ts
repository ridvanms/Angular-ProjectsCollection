import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
<<<<<<< HEAD
  HttpParams
=======
  HttpParams,
  HttpEvent,
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
} from '@angular/common/http';
import { take, exhaustMap, map } from 'rxjs/operators';
import { Store } from '@ngrx/store';

import { AuthService } from './auth.service';
<<<<<<< HEAD
import * as fromApp from '../store/app.reducer';
=======
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(private authService: AuthService, private store: Store<fromApp.AppState>) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return this.store.select('auth').pipe(
      take(1),
      map(authState => {
        return authState.user;
      }),
<<<<<<< HEAD
      exhaustMap(user => {
=======
      exhaustMap((user): any => {
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token)
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
