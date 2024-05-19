import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { TrackedArray } from 'tracked-built-ins';

export default class GameController extends Controller {
  turn = 1;
  playerQuantity = 2;
  rowQuantity = 3;
  columnQuantity = 3;
  @tracked currentMarker = this.markers[0];
  @tracked rows = Array.from(
    new Array(this.rowQuantity),
    () => new TrackedArray(Array(this.columnQuantity)),
  );

  get markerAttrs() {
    return {
      X: { icon: 'xmark', size: '5x', style: 'fas' },
      O: { icon: 'circle', size: '4x', style: 'far' },
    };
  }

  get markers() {
    return Object.keys(this.markerAttrs);
  }

  columns = () => {
    return this.rows[0].map((_, colIndex) =>
      this.rows.map((row) => row[colIndex]),
    );
  };

  checkColumns = () => {
    return this.columns().some(this.hasSequence);
  };

  checkRows = () => {
    return this.rows.some(this.hasSequence);
  };

  increaseTurn() {
    this.turn++;
  }

  toggleMarker() {
    this.currentMarker = this.markers[(this.turn + 1) % this.playerQuantity];
  }

  hasSequence = (row) => {
    return !row.includes(undefined) && row.every((elem) => elem === row[0]);
  };

  hasWinner = () => {
    return this.checkRows() || this.checkColumns();
  };

  announceWinner = () => {
    if (!this.hasWinner()) return;

    alert('Winner');
  };

  @action
  onCellClick() {
    this.increaseTurn();
    this.toggleMarker();
    this.announceWinner();
  }
}