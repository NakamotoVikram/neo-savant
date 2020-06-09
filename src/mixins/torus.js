import TorusSdk from '@toruslabs/torus-direct-web-sdk';

export default {
  methods: {
    async connectTorus() {
      const torusdirectsdk = new TorusSdk({
        baseUrl:
          process.env.TORUS_SW_URL ||
          window.location.origin + '/serviceworker',
        GOOGLE_CLIENT_ID: process.env.GOOGLE_CLIENT_ID || ''
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
