import Component from '@glimmer/component';

export default class BoardComponent extends Component {
  get rows() {
    return this.args.rows;
  }
}
