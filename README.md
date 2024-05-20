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
- I'd love to add a proper display of who the winner is. Maybe a proper modal using the [`<dialog>`](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog) element instead of a javascript alert

## Mobile first
The application was developed with a mobile first approach. Here is how it looks in mobile landscape mode <br />
![Screen Recording 2024-05-19 at 17 42 33](https://github.com/heyapricot/emberTicTacToe/assets/14355495/30fad7d8-ffe0-4fa2-bfdb-31e4d45ff28e) <br />
And vertically <br />
![Screen Recording 2024-05-19 at 17 43 28](https://github.com/heyapricot/emberTicTacToe/assets/14355495/02aad961-570e-4567-a342-467fe468de5d)
