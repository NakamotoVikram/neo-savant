import TorusSdk from '@toruslabs/torus-direct-web-sdk';

export default {
  methods: {
    async connectTorus() {
      const torusdirectsdk = new TorusSdk({
        baseUrl:
          process.env.TORUS_SW_URL ||
          window.location.origin + '/serviceworker',
        GOOGLE_CLIENT_ID: '115303231100-uh4jb6m8efmsf2l89k5iqi23l5uni8e6.apps.googleusercontent.com'
      });
      await torusdirectsdk.init();
      const loginDetails = await torusdirectsdk.triggerLogin(
        'google',
        'google-neo-ide'
      );

      console.log(loginDetails);
    }
  }
};
