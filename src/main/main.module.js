import angular from 'angular';
import 'controls/controls.module.js';
import { mainComponent } from './main.component';

const mainModule = angular.module('main', ['controls']);
mainModule
  .component('main', mainComponent);

export default mainModule;
