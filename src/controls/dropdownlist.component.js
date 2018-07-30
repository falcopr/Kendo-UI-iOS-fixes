import kendo from 'common/kendo.js';
import template from './dropdownlist.component.html';
import assetFavorites from '../data/asset-favorites.json';
import assetGrouping from '../data/asset-groupings.json';
import forEach from 'lodash-es/forEach';
import includes from 'lodash-es/includes';

class DropDownListComponent {
  constructor() {
    this.assetDataSource = undefined;
    this.selectedAsset = undefined;
  }

  $onInit() {
    console.log('DropDownListComponent initialized!');
    this.assetDataSource = this.getAssetsDataSource();
  }

  onAssetChanged() {
    console.log(`Asset changed to '${this.selectedAsset.Name}'`);
  }

  getAssetsDataSource() {
    return new kendo.data.DataSource({
      data: assetGrouping,
      group: [{ field: 'GroupName', dir: 'desc' }],
      schema: {
        data: (data) => {
          let currentFavorites = assetFavorites['1-1'];
          forEach(data, (asset) => {
            asset.GroupName = includes(currentFavorites, asset.Id) ? 'Favoriten' : 'Alphabetisch';
          });

          return data;
        }
      },
      error: (e) => console.log(e),
      sort: { field: 'Name', dir: 'asc' }
    });
  }
}

export let dropDownListComponent = {
  template: template,
  controller: DropDownListComponent
};
