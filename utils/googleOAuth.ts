interface AuthResponse {
  /**
   * The Access Token granted.
   */
  access_token: string;
  /**
   * The ID Token granted.
   */
  id_token: string;
  /**
   * The scopes granted in the Access Token.
   */
  scope: string;
  /**
   * The number of seconds until the Access Token expires.
   */
  expires_in: number;
  /**
   * 	The timestamp at which the user first granted the scopes requested.
   */
  first_issued_at: number;
  /**
   * The timestamp at which the Access Token will expire.
   */
  expires_at: number;
}

interface BasicUserInfo {
  /**
   * Get the user id
   */
  getId: () => string;
  /**
   * Get the user name
   */
  getName: () => string;
  /**
   * Get the user given name
   */
  getGivenName: () => string;
  /**
   * Get the user family name
   */
  getFamilyName: () => string | null;
  /**
   * Get the user email address
   */
  getEmail: () => string;
}

export interface GoogleUser {
  getId(): () => string;
  getBasicProfile: () => BasicUserInfo;
  getAuthResponse: () => AuthResponse;
}

export interface GAuth {
  GoogleAuth: {
    /**
     * Function for sign-in
     */
    signIn: (successCallback?: (arg0: any) => void, errorCallback?: (arg0: boolean) => void) => Promise<GoogleUser>;
    /**
     * Function for sign-out
     */
    signOut: (successCallback?: () => void, errorCallback?: (arg0: boolean) => void) => Promise<boolean>;
    /**
     * Wether the user is signed in or not
     */
    isSignedIn: {
      get: () => boolean;
    };
    grantOfflineAccess: ({ prompt }: { prompt: string }) => Promise<{ code: number }>;
  };
  /**
   * Whether or not you have auth
   */
  isAuthorized: boolean;
  /**
   * Whether or not api init
   */
  isInit: boolean;
  /**
   * Whether or not api init. will be deprecated.
   */
  isLoaded: () => boolean;
  /**
   * Load the api
   */
  load: (config: GAuthOptions, prompt: string) => void;
  /**
   * Function for sign-in
   */
  signIn: (successCallback?: (arg0?: any) => void, errorCallback?: (arg0: boolean) => void) => Promise<GoogleUser>;
  /**
   * Function for getting authCode
   */
  getAuthCode: (
    successCallback?: (arg0?: any) => void,
    errorCallback?: (arg0: boolean) => void
  ) => Promise<number | boolean>;
  /**
   * Function for sign-out
   */
  signOut: (successCallback?: (arg0?: any) => void, errorCallback?: (arg0: boolean) => void) => Promise<boolean>;
  prompt?: string | null;
}

export interface GAuthOptions {
  scope: string;
  prompt: string;
  clientId: string;
  fetch_basic_profile: boolean;
}

let googleAuth = (function () {
  function installClient() {
    const apiUrl = 'https://apis.google.com/js/api.js';
    return new Promise((resolve) => {
      let script = document.createElement('script');
      script.src = apiUrl;
      script['onreadystatechange'] = script.onload = function () {
        if (!script['readyState'] || /loaded|complete/.test(script['readyState'])) {
          setTimeout(function () {
            resolve(true);
          }, 500);
        }
      };
      document.getElementsByTagName('head')[0].appendChild(script);
    });
  }

  function initClient(config: any) {
    return new Promise((resolve) => {
      window['gapi'].load('auth2', () => {
        window['gapi'].auth2.init(config).then(() => {
          resolve(window['gapi']);
        });
      });
    });
  }

  function Auth(this: GAuth): void {
    if (!(this instanceof Auth)) return new Auth();
    this.GoogleAuth = null; /* window.gapi.auth2.getAuthInstance() */
    this.isAuthorized = false;
    this.isInit = false;
    this.prompt = null;
    this.isLoaded = function () {
      /* eslint-disable */
      console.warn('isLoaded() will be deprecated. You can use "this.$gAuth.isInit"');
      return !!this.GoogleAuth;
    };

    this.load = (config: GAuthOptions, prompt: string) => {
      installClient()
        .then(() => {
          return initClient(config);
        })
        .then((gapi) => {
          this.GoogleAuth = gapi['auth2'].getAuthInstance();
          this.isInit = true;
          this.prompt = prompt;
          this.isAuthorized = this.GoogleAuth.isSignedIn.get();
        });
    };

    this.signIn = (successCallback, errorCallback) => {
      return new Promise((resolve, reject) => {
        if (!this.GoogleAuth) {
          if (typeof errorCallback === 'function') errorCallback(false);
          reject(false);
          return;
        }
        this.GoogleAuth.signIn()
          .then((googleUser) => {
            if (typeof successCallback === 'function') successCallback(googleUser);
            this.isAuthorized = this.GoogleAuth.isSignedIn.get();
            resolve(googleUser);
          })
          .catch((error) => {
            if (typeof errorCallback === 'function') errorCallback(error);
            reject(error);
          });
      });
    };

    this.getAuthCode = (successCallback, errorCallback) => {
      return new Promise((resolve, reject) => {
        if (!this.GoogleAuth) {
          if (typeof errorCallback === 'function') errorCallback(false);
          reject(false);
          return;
        }
        this.GoogleAuth.grantOfflineAccess({ prompt: this.prompt })
          .then(function (resp: { code: number }) {
            if (typeof successCallback === 'function') successCallback(resp.code);
            resolve(resp.code);
          })
          .catch(function (error: boolean) {
            if (typeof errorCallback === 'function') errorCallback(error);
            reject(error);
          });
      });
    };

    this.signOut = (successCallback, errorCallback) => {
      return new Promise((resolve, reject) => {
        if (!this.GoogleAuth) {
          if (typeof errorCallback === 'function') errorCallback(false);
          reject(false);
          return;
        }
        this.GoogleAuth.signOut()
          .then(() => {
            if (typeof successCallback === 'function') successCallback();
            this.isAuthorized = false;
            resolve(true);
          })
          .catch((error) => {
            if (typeof errorCallback === 'function') errorCallback(error);
            reject(error);
          });
      });
    };
  }

  return new Auth();
})();

function installGoogleAuthPlugin(Vue: any, options: GAuthOptions) {
  //set config
  let GoogleAuthConfig = null;
  let GoogleAuthDefaultConfig = {
    scope: 'profile email',
    discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
  };
  let prompt = 'select_account';
  if (typeof options === 'object') {
    GoogleAuthConfig = Object.assign(GoogleAuthDefaultConfig, options);
    if (options.scope) GoogleAuthConfig.scope = options.scope;
    if (options.prompt) prompt = options.prompt;
    if (!options.clientId) {
      console.warn('clientId is required');
    }
  } else {
    console.warn('invalid option type. Object type accepted only');
  }

  //Install Vue plugin
  Vue.gAuth = googleAuth;
  Object.defineProperties(Vue.prototype, {
    $gAuth: {
      get: function () {
        return Vue.gAuth;
      },
    },
  });
  Vue.gAuth.load(GoogleAuthConfig, prompt);
}

export default installGoogleAuthPlugin;
