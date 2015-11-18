import { test } from 'qunit';
import moduleForAcceptance from 'jsncmgs1-mirage-tutorial/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | cars');

test('visiting /cars', function(assert) {
  visit('/cars');

  andThen(function() {
    assert.equal(currentURL(), '/cars');
  });
});
