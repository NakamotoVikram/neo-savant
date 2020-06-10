import TorusSdk from '@toruslabs/torus-direct-web-sdk';

const clientId = process.env.GOOGLE_CLIENT_ID || '876733105116-i0hj3s53qiio5k95prpfmj0hp0gmgtor.apps.googleusercontent.com';

export default {
  methods: {
    async connectTorus() {
      const torusdirectsdk = new TorusSdk({
        baseUrl: `${window.location.origin}/serviceworker`
      });
      await torusdirectsdk.init();
      const loginDetails = await torusdirectsdk.triggerLogin({
        clientId,
        typeOfLogin: 'google',
        verifier: 'google'
      });

      return loginDetails.privateKey;
    }
  }
};
