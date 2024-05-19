import { module, test } from 'qunit';
import { visit, click, find } from '@ember/test-helpers';
import { setupApplicationTest } from 'tictactoe/tests/helpers';
import { getPageTitle } from 'ember-page-title/test-support';

module('Acceptance | game', function (hooks) {
  setupApplicationTest(hooks);

  test('visiting /game', async function (assert) {
    await visit('/');

    assert.strictEqual(getPageTitle(), 'Tic-tac-toe');

    let boardCells = document.querySelectorAll(
      'button.rounded-full.bg-purple-400',
    );

    assert.strictEqual(boardCells.length, 9, 'The board has 9 spaces');
  });

  test('click a board cell', async function (assert) {
    await visit('/');
    await click('button[data-row="0"][data-column="1"]');

    let button = find('button[data-row="0"][data-column="1"]');
    assert.ok(
      button.querySelector('svg.fa-xmark'),
      'FontAwesome X icon is rendered inside the button',
    );
  });

  test('Doing a row sequence', async function (assert) {
    await visit('/');
    await click('button[data-row="0"][data-column="0"]');
    await click('button[data-row="1"][data-column="0"]');
    await click('button[data-row="0"][data-column="1"]');
    await click('button[data-row="1"][data-column="1"]');

    let alertCalled = false;
    const originalAlert = window.alert;
    window.alert = () => {
      alertCalled = true;
    };

    try {
      // Assuming the button has a specific identifier like an id or data-test attribute
      await click('button[data-row="0"][data-column="2"]');

      // Assert that the alert was called
      assert.ok(alertCalled, 'Alert was shown after clicking the button');
    } finally {
      // Restore the original window.alert method
      window.alert = originalAlert;
    }
  });

  test('Doing a column sequence', async function (assert) {
    await visit('/');
    await click('button[data-row="0"][data-column="1"]');
    await click('button[data-row="0"][data-column="0"]');
    await click('button[data-row="1"][data-column="1"]');
    await click('button[data-row="1"][data-column="0"]');

    let alertCalled = false;
    const originalAlert = window.alert;
    window.alert = () => {
      alertCalled = true;
    };

    try {
      // Assuming the button has a specific identifier like an id or data-test attribute
      await click('button[data-row="2"][data-column="1"]');

      // Assert that the alert was called
      assert.ok(alertCalled, 'Alert was shown after clicking the button');
    } finally {
      // Restore the original window.alert method
      window.alert = originalAlert;
    }
  });

  test('Doing a diagonal sequence', async function (assert) {
    await visit('/');
    await click('button[data-row="0"][data-column="2"]');
    await click('button[data-row="0"][data-column="0"]');
    await click('button[data-row="1"][data-column="1"]');
    await click('button[data-row="0"][data-column="1"]');

    let alertCalled = false;
    const originalAlert = window.alert;
    window.alert = () => {
      alertCalled = true;
    };

    try {
      // Assuming the button has a specific identifier like an id or data-test attribute
      await click('button[data-row="2"][data-column="0"]');

      // Assert that the alert was called
      assert.ok(alertCalled, 'Alert was shown after clicking the button');
    } finally {
      // Restore the original window.alert method
      window.alert = originalAlert;
    }
  });
});
