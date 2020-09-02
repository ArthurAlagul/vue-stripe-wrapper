(function (global, factory) {
	typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('initialize')) :
	typeof define === 'function' && define.amd ? define(['initialize'], factory) :
	(global.vueStripeWrapper = factory(global.initialize));
}(this, (function (initialize) { 'use strict';

var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) {
  return typeof obj;
} : function (obj) {
  return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
};

var index = {
  install: function install(Vue, options) {
    if ((typeof options === 'undefined' ? 'undefined' : _typeof(options)) !== 'object' || !options.stripSecret) {
      throw new Error('Stripe Secret is not specified');
    }

    initialize.ready(function () {
      var stripe = Stripe(options.stripSecret);

      Object.defineProperties(Vue.prototype, {
        $stripe: {
          get: function get() {
            return stripe;
          }
        }
      });

      Vue.stripe = stripe;
    });
  }
};

return index;

})));
