export function initFacebookSdk () {
  return new Promise((resolve) => {
    // wait for facebook sdk to initialize before starting the vue app
    if (process.client) {
      window.fbAsyncInit = function () {
        FB.init({
          appId: process.env.fbClientId,
          cookie: true,
          version: 'v9.0',
        });

        // auto authenticate with the api if already logged in with facebook
        FB.getLoginStatus(({ authResponse }) => {
          if (authResponse) {
            resolve(authResponse.accessToken);
          } else {
            resolve(authResponse);
          }
        });
      };

      // load facebook sdk script
      (function (d, s, id) {
        let js;
        const fjs = d.getElementsByTagName(s)[0];
        if (d.getElementById(id)) {
          return;
        }
        // eslint-disable-next-line prefer-const
        js = d.createElement(s);
        js.id = id;
        js.src = 'https://connect.facebook.net/en_US/sdk.js';
        fjs.parentNode.insertBefore(js, fjs);
      })(document, 'script', 'facebook-jssdk');
    }
  });
}
