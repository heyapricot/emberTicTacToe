import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';
import { TrackedArray } from 'tracked-built-ins';
import { service } from '@ember/service';

export default class GameController extends Controller {
  @service router;

  playerQuantity = 2;
  rowQuantity = 3;
  columnQuantity = 3;
  @tracked currentMarker = this.markers[0];
  @tracked rows = Array.from(
    new Array(this.rowQuantity),
    () => new TrackedArray(Array(this.columnQuantity)),
  );
  @tracked turn = 1;

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

  diagonals = () => {
    const leftToRight = this.rows.map((_, index) => this.rows[index][index]);
    const rightToLeft = this.rows.map(
      (_, index) => this.rows.toReversed()[index][index],
    );

    return [leftToRight, rightToLeft];
  };

  checkSequences = () => {
    const sequences = [this.rows, this.columns(), this.diagonals()].flat();

    return sequences.some(this.hasUniqueElement);
  };

  increaseTurn() {
    this.turn++;
  }

  toggleMarker() {
    this.currentMarker = this.markers[(this.turn + 1) % this.playerQuantity];
  }

  hasUniqueElement = (row) => {
    return !row.includes(undefined) && row.every((elem) => elem === row[0]);
  };

  hasWinner = () => {
    return this.checkSequences();
  };

  announceWinner = () => {
    if (!this.hasWinner()) return;

    alert(`Winner is ${this.currentMarker}`);
  };

  @action
  onCellClick() {
    this.announceWinner();
    this.increaseTurn();
    this.toggleMarker();
  }

  @action
  reset() {
    this.turn = 1;
    this.currentMarker = this.markers[0];
    this.rows = Array.from(
      new Array(this.rowQuantity),
      () => new TrackedArray(Array(this.columnQuantity)),
    );
  }
}
