import Route from '@ember/routing/route';
class Game {
  constructor() {
    this.turn = 1;
  }
}
export default class GameRoute extends Route {
  model() {
    return new Game();
  }
}
