import './polyfills';
import { Utils } from './utils';
import template from './index.html';

console.log('It starts!');

(async () => {
  await Utils.onDocumentReady();
  let app = document.getElementById('app');
  app.innerHTML = template;
})();
