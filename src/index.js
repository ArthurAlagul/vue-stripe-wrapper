import { ready } from 'initialize';

export default {
  install(Vue, options) {
    if (typeof options !== 'object' || !options.stripSecret) {
      throw new Error('Stripe Secret is not specified');
    }

    ready(() => {
      let stripe = Stripe(options.stripSecret);

      Object.defineProperties(Vue.prototype, {
        $stripe: {
          get() {
            return stripe;
          },
        },
      });

      Vue.stripe = stripe;
    });
  }
};
