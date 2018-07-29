import template from './main.component.html';

class MainController {
  constructor() {
    console.log('MainController initialized!');
  }
}

export let mainComponent = {
  template: template,
  controller: MainController
}
