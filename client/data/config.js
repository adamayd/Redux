import Raven from 'raven-js';

const sentry_key = '3b501fcb1f8449d59c7c6850b334d55a';
const sentry_app = '302924';
export const sentry_url = `https://${sentry_key}@app.getsentry.com/${sentry_app}`;

export function logException(ex, context) {
  Raven.captureException(ex, {
    extra: context
  });
  /*eslint no-console:0*/
  window && window.console && console.error && console.error(ex);
}
