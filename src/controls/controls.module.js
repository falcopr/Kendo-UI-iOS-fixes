import angular from 'angular';

import { dropDownListComponent } from './dropdownlist.component';

const controlsModule = angular.module('controls', ['kendo.directives']);
controlsModule
  .component('dropDownList', dropDownListComponent);

export default controlsModule;
