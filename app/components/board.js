import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
import { TrackedArray } from 'tracked-built-ins';
export default class BoardComponent extends Component {
  rowQuantity = 3;
  columnQuantity = 3;
  currentMarker = { icon: 'xmark', size: '5x' };

  @tracked rows = Array.from(
    new Array(this.rowQuantity),
    () => new TrackedArray(Array(this.columnQuantity)),
  );

  @action
  writeBoard(rowIndex, columnIndex) {
    this.rows[rowIndex][columnIndex] = this.args.marker;
  }

  @action
  handleCellClick(rowIndex, columnIndex) {
    this.writeBoard(rowIndex, columnIndex);
    this.args.onCellClick();
  }
}
