import kendo from 'common/kendo.js';
import $ from 'jquery';
import template from './rangeslider.component.html';
import { Utils } from 'common/utils.js';
import debounce from 'lodash-es/debounce'

class RangeSliderComponent {
  constructor() {
  }

  async $onInit() {
    console.log('RangeSliderComponent initialized!');
    await Utils.onDocumentReady();
    $("#rangeSlider").kendoRangeSlider({
      min: 10,
      max: 50,
      orientation: "horizontal",
      smallStep: 1,
      largeStep: 10
    });
    
    let debouncedResize = debounce(() => {
      let rangeSlider = $("#rangeSlider").data("kendoRangeSlider");
      rangeSlider.resize();
    }, 200); 

    debouncedResize();
    $(window).resize(debouncedResize);
  }
}

export let rangeSliderComponent = {
  template: template,
  controller: RangeSliderComponent
};
