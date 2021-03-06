import { module, test } from 'qunit';
import { setupRenderingTest } from 'ember-qunit';
import { render } from '@ember/test-helpers';
import hbs from 'htmlbars-inline-precompile';

module('Integration | Component | subtasks-list', function(hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function(assert) {
    await render(hbs`
      {{subtasks-list
        items=(array)
        reorderItems=(optional)
      }}
    `);

    assert.equal(this.element.textContent.trim(), '');
  });
});
