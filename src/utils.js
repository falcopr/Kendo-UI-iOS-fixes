import $ from 'jquery';

export class Utils {
  static onDocumentReady() {
    return new Promise((resolve) => $(document).ready(() => resolve()));
  }
}
