export enum MutationsTypes {
  SET_USER = 'setUser',
  SET_SESSION = 'setSession',
  RESET_STATE = 'resetState',
}

export enum ActionsTypes {
  SIGN_IN = 'signIn',
  SIGN_IN_WITH_GOOGLE = 'signInWithGoogle',
  SIGN_IN_WITH_FACEBOOK = 'signInWithFacebook',
  SIGN_UP = 'signUp',
  SET_SESSION = 'setSession',
  SIGN_OUT = "signOut",
  SEND_RESET_PASSWORD_EMAIL = 'sendResetPasswordEmail',
}

export enum SignInProviders {
  EMAIL = 'email',
  FACEBOOK = 'facebook',
  GOOGLE = 'google',
}
