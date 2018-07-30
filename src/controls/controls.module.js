import angular from 'angular';

import { dropDownListComponent } from './dropdownlist.component';
import { rangeSliderComponent } from './rangeslider.component';

const controlsModule = angular.module('controls', ['kendo.directives']);
controlsModule
  .component('dropDownList', dropDownListComponent)
  .component('rangeSlider', rangeSliderComponent);

export default controlsModule;
