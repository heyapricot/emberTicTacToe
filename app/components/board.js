import Component from '@glimmer/component';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';
export default class BoardComponent extends Component {
  rowQuantity = 3;
  columnQuantity = 3;
  currentMarker = '💜';

  @tracked rows = Array.from(
    new Array(this.rowQuantity),
    () => new Array(this.columnQuantity),
  );

  @action
  writeBoard(rowIndex, columnIndex) {
    this.rows[rowIndex][columnIndex] = this.currentMarker;
    console.info(this.rows);
  }
}
