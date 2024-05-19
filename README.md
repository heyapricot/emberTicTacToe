# tictactoe

This README outlines the details of collaborating on this Ember application.
This is a frontend only implementation of the Tic-tac-toe game

## Prerequisites

You will need the following things properly installed on your computer.

* [Git](https://git-scm.com/)
* [Node.js](https://nodejs.org/)
* [Yarn](https://yarnpkg.com/)
* [Ember CLI](https://cli.emberjs.com/release/)
* [Google Chrome](https://google.com/chrome/)

## Installation

* `git clone [https://github.com/heyapricot/emberTicTacToe.git](https://github.com/heyapricot/emberTicTacToe.git)` this repository
* `cd tictactoe`
* `yarn install`

## Running / Development

* `yarn start`
* Visit the app at [http://localhost:4200](http://localhost:4200).
* Visit the tests at [http://localhost:4200/tests](http://localhost:4200/tests).

### Running Tests

* `yarn test`
* `yarn test:ember --server`

### Linting

* `yarn lint`
* `yarn lint:fix`

### Building

* `yarn ember build` (development)
* `yarn build` (production)

## Wishlist

- During the development, I thought of adding a `Player` object and the associated routes. It would allow to set the player's name and marker
- I'd love to add a proper display of who the winner is. Maybe a proper modal using the [<dialog>](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element instead of a javascript alert
