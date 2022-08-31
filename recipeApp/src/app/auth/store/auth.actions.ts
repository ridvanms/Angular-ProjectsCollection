import { Action } from "@ngrx/store";

<<<<<<< HEAD
export const LOGIN_START = "[Auth] Login Start";
export const LOGIN = "[Auth] Login";
export const LOGIN_FAIL = "[Auth] Login Fail";
export const LOGOUT = "[Auth] Logout";
=======
export const LOGIN_START = '[Auth] LOGIN START';
export const LOGIN = '[Auth] LOGIN';
export const LOGOUT = '[Auth] LOGOUT';
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e

export class Login implements Action {
  readonly type = LOGIN;

  constructor(
    public payload: {
      email: string;
      userId: string;
      token: string;
      expirationDate: Date;
    }
  ) {}
}

export class Logout implements Action {
  readonly type = LOGOUT;
}
export class LoginStart implements Action {
  readonly type = LOGIN_START;

<<<<<<< HEAD
export class LoginStart implements Action {
  readonly type = LOGIN_START;

  constructor(public payload: { email: string; password: string }) {}
}

export class LoginFail implements Action {
  readonly type = LOGIN_FAIL;

  constructor(public payload: string) {}
}

export type AuthActions = Login | Logout | LoginStart | LoginFail;
=======
  constructor(public payload: { email: string; password: string }) {}
}

export type AuthAction = Login | Logout | LoginStart;
>>>>>>> 0b7ac1a53d942d6d3ef1248add50816b17bea20e
