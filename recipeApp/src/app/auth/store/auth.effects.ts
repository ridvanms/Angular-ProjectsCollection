import { HttpClient } from '@angular/common/http';
import { Actions,  Effect,  ofType } from '@ngrx/effects';
import { of } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';
import { environment } from 'src/environments/environment';

import * as AuthAction from './auth.actions';

export interface AuthResponseData {
  kind: string;
  idToken: string;
  email: string;
  refreshToken: string;
  expiresIn: string;
  localId: string;
  registered?: boolean;
}

export class AuthEffects {
  @Effect()
  
  constructor(private actions$: Actions, private http: HttpClient) {}

  authLogin = this.actions$.pipe(
    ofType(AuthAction.LOGIN_START),
    switchMap((authData: AuthAction.LoginStart) => {
      return this.http.post<AuthResponseData>(
        'https://www.googleapis.com/identitytoolkit/v3/relyingparty/verifyPassword?key=' +
          environment.firebaseAPIKey,
        {
          email: authData.payload.email,
          password: authData.payload.password,
          returnSecureToken: true,
        }
      ).pipe(
        catchError(
          error => {
            //...
            of();
          }
          ),map(resData => {
            //...
            of();
          })
        )
      
    })
  );

}
