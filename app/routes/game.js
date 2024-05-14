import Route from '@ember/routing/route';
import { tracked } from '@glimmer/tracking';

class Game {
  constructor() {
    this.board = new Board();
    this.turn = 1;
  }
}

class Board {
  @tracked rowQuantity = 3;
  @tracked columnQuantity = 3;

  constructor() {
    this.rows = Array.from(
      new Array(this.rowQuantity),
      () => new Array(this.columnQuantity),
    );
  }
}
export default class GameRoute extends Route {
  model() {
    return new Game();
  }
}
