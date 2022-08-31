import { Injectable } from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpParams,
  HttpEvent,
} from '@angular/common/http';
import { take, exhaustMap, map } from 'rxjs/operators';

import * as FromApp from '../store/app.reducer';
import { AuthService } from './auth.service';
import { Store } from '@ngrx/store';
import { Observable } from 'rxjs';

@Injectable()
export class AuthInterceptorService implements HttpInterceptor {
  constructor(
    private authService: AuthService,
    private store: Store<FromApp.AppState>
  ) {}

  intercept(req: HttpRequest<any>, next: HttpHandler): any {
    return this.store.select('auth').pipe(
      take(1),
      map((authState) => {
        return authState.user;
      }),
      exhaustMap((user): any => {
        if (!user) {
          return next.handle(req);
        }
        const modifiedReq = req.clone({
          params: new HttpParams().set('auth', user.token),
        });
        return next.handle(modifiedReq);
      })
    );
  }
}
