import './libraries';
import 'main/main.module.js';
import { Utils } from './common/utils';
import template from './index.html';

console.log('Initializing application!');

(async () => {
  await Utils.onDocumentReady();
  let app = document.getElementById('app');
  app.innerHTML = template;
})();
