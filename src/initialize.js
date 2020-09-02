export const ready = (callback) => {
  let script = document.createElement('script');

  script.setAttribute('src', 'https://js.stripe.com/v3/');

  if (typeof callback === 'function') {
    script.addEventListener('load', (e) => {
      callback(null, e);
    }, false);
  }

  document.head.appendChild(script);
};
