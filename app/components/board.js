import Component from '@glimmer/component';
import { action } from '@ember/object';
export default class BoardComponent extends Component {
  @action
  writeBoard(rowIndex, columnIndex) {
    this.args.rows[rowIndex][columnIndex] = this.args.marker;
  }

  @action
  handleCellClick(rowIndex, columnIndex) {
    this.writeBoard(rowIndex, columnIndex);
    this.args.onCellClick();
  }

  icon = (marker) => {
    return this.args.markerAttrs[marker].icon;
  };

  playsBlocked = (item) => {
    return item || this.args.playsBlocked;
  };

  size = (marker) => {
    return this.args.markerAttrs[marker].size;
  };

  style = (marker) => {
    return this.args.markerAttrs[marker].style;
  };
}
