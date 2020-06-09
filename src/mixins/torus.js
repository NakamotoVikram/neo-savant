import TorusSdk from '@toruslabs/torus-direct-web-sdk';

export default {
  methods: {
    async connectTorus() {
      const torusdirectsdk = new TorusSdk({
        baseUrl: 'http://localhost:8080/serviceworker',
        network: 'ropsten',
        enableLogging: true,
        FACEBOOK_CLIENT_ID: '2554219104599979',
        proxyContractAddress: '0x4023d2a0D330bF11426B12C6144Cfb96B7fa6183',
        GOOGLE_CLIENT_ID: '74915647456-dmjtvi9heh9h944ni2iadabio9kaqd86.apps.googleusercontent.com'
      });
      await torusdirectsdk.init();
      const loginDetails = await torusdirectsdk.triggerLogin(
        'google',
        'google'
      );

      console.log(loginDetails);
    }
  }
};
