import { test } from 'qunit';
import moduleForAcceptance from 'jsncmgs1-mirage-tutorial/tests/helpers/module-for-acceptance';

moduleForAcceptance('Acceptance | cars');

test('visiting /cars', function(assert) {
  visit('/cars');

  andThen(function() {
    assert.equal(currentURL(), '/cars');
  });
});

test('clicking link to get to /cars', function(assert) {
  visit('/');

  click('#all-cars');

  andThen(function() {
    assert.equal(currentURL(), '/cars');
  });
});

test('I see all cars on the cars page', (assert) => {
  server.create('car');
  visit('/cars');

  andThen(() => {
    const cars = find('li.car');
    assert.equal(cars.length, 1);
  });
});
