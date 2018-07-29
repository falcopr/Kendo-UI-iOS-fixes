import template from './dropdownlist.component.html';

class DropDownListComponent {
  constructor() {
    console.log('DropDownListComponent initialized!');
  }
}

export let dropDownListComponent = {
  template: template,
  controller: DropDownListComponent
}
