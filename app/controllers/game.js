import Controller from '@ember/controller';
import { action } from '@ember/object';
import { tracked } from '@glimmer/tracking';

export default class GameController extends Controller {
  turn = 1;
  playerQuantity = 2;
  @tracked currentMarker = this.markers[0];

  get markerAttrs() {
    return {
      X: { icon: 'xmark', size: '5x', style: 'fas' },
      O: { icon: 'circle', size: '4x', style: 'far' },
    };
  }

  get markers() {
    return Object.keys(this.markerAttrs);
  }

  increaseTurn() {
    this.turn++;
  }

  toggleMarker() {
    this.currentMarker = this.markers[(this.turn + 1) % this.playerQuantity];
  }

  @action
  onCellClick() {
    this.increaseTurn();
    this.toggleMarker();
  }
}
